import axios from 'axios'
import { UploadS3 } from './interface'

export const uploadS3 = async ({ file, type, onUploadProgress }: UploadS3) => {
  const minSize = 0
  const maxSize = 1 * 1024 * 1024 // 1MB

  if (file?.size! > maxSize) throw new Error('File size is too large')

  if (file?.size! < minSize) throw new Error('File size is too small')

  const filename = file?.name

  const res = await axios.post(`/api/s3/upload`, { type, filename })

  const { url, fields, error } = res.data.post

  if (error) throw new Error(error)

  if (!url || !fields) {
    throw new Error('Invalid response from server')
  }

  const formData = new FormData()
  Object.entries({ ...fields, file }).forEach(([key, value]: any[]) => {
    formData.append(key, value)
  })

  const upload = await axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  })

  const awsUrl = `https://psyhope.s3.ap-northeast-1.amazonaws.com/${type}/${filename}`

  if (upload?.status == 204) {
    return awsUrl
  } else {
    throw new Error('Upload failed')
  }
}
