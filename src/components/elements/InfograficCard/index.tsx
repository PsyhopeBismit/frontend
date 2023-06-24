import Image from 'next/image'
import React from 'react'
import PlaceHolder from '../../../../public/assets/Placeholder.png'

export const InfograficCard: React.FC = () => {
  return (
    <div className="lg:w-[445px] w-[200px] rounded-lg relative flex-none">
      <div className="w-full aspect-infografic relative">
        <Image
          alt="Infografis"
          src={PlaceHolder}
          fill
          className="rounded-t-lg"
        />
      </div>
      <div className="bg-[#D9D6FE] w-full lg:h-[156px] h-[100px] relative rounded-lg -mt-2 lg:p-6 p-2">
        <p className="text-[#53389E] lg:text-2xl text-lg font-bold">Judul</p>
        <p className="lg:max-h-20 max-h-12 pb-6 overflow-hidden lg:text-base text-xs">
          Lorem ipsum dolor sit amet consectetur. Dui in iaculis non dui amet
          imperdiet Lorem ipsum dolor sit amet consectetur. Dui in iaculis non
          dui amet imperdietLorem ipsum dolor sit amet consectetur. Dui in
          iaculis non dui amet imperdiet Lorem ipsum dolor sit amet consectetur.
          Dui in iaculis non dui amet imperdiet
        </p>
      </div>
    </div>
  )
}