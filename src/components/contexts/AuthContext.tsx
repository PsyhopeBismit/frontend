// import axios, { AxiosError } from "axios";
'use client'

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/navigation'
import { env } from '@/env.mjs'
import { notifications } from '@mantine/notifications'
import { FaTimes } from 'react-icons/fa'

const AuthContext = createContext<{
  accessToken: string
  user: {
    username: string
    id: string
  }
  login: (username: string, password: string) => Promise<void>
  // register: (
  //   username: string,
  //   password: string,
  //   confirmPassword: string,
  //   email: string
  // ) => Promise<void>
  logout: () => void
  refreshToken: () => Promise<void>
}>({
  accessToken: '',
  user: { username: '', id: '' },
  login: undefined as unknown as (
    username: string,
    password: string
  ) => Promise<void>,
  logout: undefined as unknown as () => void,
  // register: undefined as unknown as (
  //   username: string,
  //   password: string,
  //   confirmPassword: string,
  //   email: string
  // ) => Promise<void>,
  refreshToken: undefined as unknown as () => Promise<void>,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState('')
  const [user, setUser] = useState<{
    username: string
    id: string
  }>({ username: '', id: '' })
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const login = async (username: string, password: string) => {
    setLoading(true)
    try {
      const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        method: 'POST',
        // credentials: "include",
      })
      console.log(res.status)
      if (res.status !== 200) throw new Error(await res.json())
      // router.replace("/dashboard")
      const data: TokenResponse = await res.json()
      const user = jwt_decode<{ username: string; sub: string }>(data.accessToken)
      // console.log(user)
      setUser({ username: user.username, id: user.sub })
      setAccessToken(data.accessToken)
      notifications.show({
        title: 'Success',
        message: 'Login Successfull',
        color: 'teal',
        autoClose: 3000,
      })
      router.replace('/dashboard')
    } catch (error) {
      // const err = error as AxiosError;
      console.error("Error: ", error)
      notifications.show({
        title: 'Login failed',
        message: 'Please try again',
        color: 'red',
        autoClose: 3000,
        icon: <FaTimes />,
      })
    } finally {
      setLoading(false)
    }
  }

  // const register = async (
  //   username: string,
  //   password: string,
  //   confirmPassword: string,
  //   email: string
  // ) => {
  //   setLoading(true)
  //   try {
  //     const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password, email, confirmPassword }),
  //       method: 'POST',
  //     })
  //     if (res.status !== 200) throw new Error(await res.json())
  //     router.replace('/login')
  //   } catch (err) {
  //     notifications.show({
  //       title: 'Error',
  //       message: 'Please try again',
  //       color: 'red',
  //       autoClose: 3000,
  //       icon: <FaTimes />,
  //     })
  //   }
  //   setLoading(false)
  // }

  const refreshToken = async () => {
    try {
      const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      if (res.status !== 200) return
      const data: TokenResponse = await res.json()
      const user: { username: string; sub: string } = jwt_decode(
        data.accessToken
      )
      // console.log(user)
      setUser({ username: user.username, id: user.sub })
      setAccessToken(data.accessToken)
    } catch (error) {
      // const err = error as AxiosError;
      console.error(error)
      router.replace('/login')
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    // SecureStore.deleteItemAsync("refreshToken");
    setLoading(true)
    router.replace('/login')
    setAccessToken('')
    setUser({ username: '', id: '' })
    fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).finally(() => setLoading(false))
  }

  // useEffect(() => {
  //   refreshToken()
  // }, [])

  const contextValue = {
    accessToken,
    user,
    login,
    // register,
    logout,
    refreshToken,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
