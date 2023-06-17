'use client'
import Image from 'next/image'
import HeroAssets from '../../public/assets/Hero Asset.svg'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 pt-5">
      {/* Hero */}
      <div className="h-[419px] w-full bg-[#53389E] rounded-3xl p-10 flex">
        <div className="w-3/5 h-full justify-center flex flex-col">
          <p className="text-[#E9D7FE99] font-inter font-bold text-4xl">
            Layanan Konseling UI
          </p>
          <p className="text-[#F2F4F7] text-sm mt-3 mb-10 leading-relaxed">
            Aliansi Departemen Adkesma BEM se-UI menyediakan layanan konseling
            sebaya yang diperuntukkan bagi mahasiswa program sarjana atau
            vokasi. Bersama teman sebaya, kamu dapat bercerita dengan aman dan
            nyaman.
          </p>
          <div className="bg-[#D6BBFB] w-fit px-4 py-3 rounded-t-xl rounded-r-xl text-[#53389E] font-inter font-semibold">
            <TypeAnimation
              sequence={[
                'Butuh teman bercerita? Yuk, curhat dengan konselor sebaya! 👇👇👇',
                5000,
                'Butuh teman bercerita? Yuk, curhat dengan konselor sebaya! ❤️❤️❤️',
                5000,
              ]}
              repeat={Infinity}
            />
          </div>
          <button className="mt-2 py-3 font-semibold rounded-lg drop-shadow-lg active:drop-shadow-none px-4 bg-[#7F56D9] flex-none w-fit text-white">
            Daftar Konseling Sekarang!
          </button>
        </div>
        <div className="w-2/5 relative">
          <Image
            src={HeroAssets}
            alt="Hero Assets"
            fill
            className="relative z-0"
          />
        </div>
      </div>
    </main>
  )
}
