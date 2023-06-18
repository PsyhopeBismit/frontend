'use client'
import Image from 'next/image'
import HeroAssets from '../../public/assets/Hero Asset.svg'
import ArticleBubble from '../../public/assets/Article Bubble.svg'
import Nebula from '../../public/assets/Nebula.svg'
import { TypeAnimation } from 'react-type-animation'
import { ArticleLandingCard } from '@elements'
import { ChevronLeft, ChevronRight } from '@icons'

export default function Home() {
  return (
    <main className="min-h-screen md:pt-5">
      {/* Hero */}
      <div className="md:px-10 p-5">
        <div className="md:h-[419px] w-full bg-[#53389E] rounded-3xl md:p-10 p-5 flex flex-col-reverse md:flex-row">
          <div className="md:w-3/5 w-full h-full justify-center flex flex-col">
            <p className="text-[#E9D7FE99] font-inter font-bold lg:text-4xl md:text-2xl text-xl">
              Layanan Konseling UI
            </p>
            <p className="text-[#F2F4F7] lg:text-sm text-xs mt-3 mb-10 leading-relaxed">
              Aliansi Departemen Adkesma BEM se-UI menyediakan layanan konseling
              sebaya yang diperuntukkan bagi mahasiswa program sarjana atau
              vokasi. Bersama teman sebaya, kamu dapat bercerita dengan aman dan
              nyaman.
            </p>
            <div className="bg-[#D6BBFB] w-fit px-4 py-3 rounded-t-xl rounded-r-xl text-[#53389E] font-inter font-semibold text-xs lg:text-base">
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
            <button className="mt-2 py-3 font-semibold rounded-lg drop-shadow-lg active:drop-shadow-none px-4 bg-[#7F56D9] flex-none w-fit text-white text-xs lg:text-base">
              Daftar Konseling Sekarang!
            </button>
          </div>
          <div className="md:w-2/5 w-full h-32 md:h-auto relative">
            <Image
              src={HeroAssets}
              alt="Hero Assets"
              fill
              className="relative z-0"
            />
          </div>
        </div>
      </div>
      {/* Article */}
      <div className="flex flex-col w-full md:mt-32 mt-10">
        {/* Panel Title */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <p className="font-bold font-inter lg:text-6xl md:text-4xl text-2xl text-center text-[#53389E]">
              Your Mind Matters: An Article
            </p>
            <Image
              src={ArticleBubble}
              alt="Article Bubble"
              className="absolute -top-16 -left-24"
              width={215.03}
              height={88.76}
            />
          </div>
          <p className="md:w-3/5 w-4/5 text-center text-[#7F56D9] font-inter font-medium mt-5 text-xs md:text-sm lg:text-base">
            Artikel ini akan mengajari Anda tentang dasar-dasar psikologi dan
            kesehatan mental, serta cara mengatasi tantangan umum kesehatan
            mental.
          </p>
          <button className="text-white font-inter font-semibold px-5 py-2 bg-[#7F56D9] md:text-sm text-xs rounded-lg drop-shadow-lg active:drop-shadow-none mt-5">
            Lihat Artikel Lainnya
          </button>
        </div>
        {/* Card */}
        <div className="relative">
          <div className="h-48 bg-[#0085FF] w-full absolute -bottom-10"></div>
          <div className="px-10">
            <div className="mb-5 mt-5 relative overflow-x-auto scrollbar-hidden">
              <div className="transition-transform -translate-x-0 flex">
                <ArticleLandingCard className="mx-2 flex-none" />
                <ArticleLandingCard className="mx-2 flex-none" />
                <ArticleLandingCard className="mx-2 flex-none" />
                <ArticleLandingCard className="mx-2 flex-none" />
                <ArticleLandingCard className="mx-2 flex-none" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-5 mt-5 z-20">
          <button className="w-14 h-14 rounded-full bg-[#42307D] flex items-center justify-center">
            <ChevronLeft />
          </button>
          <button className="w-14 h-14 rounded-full bg-[#42307D] flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>
      </div>
    </main>
  )
}
