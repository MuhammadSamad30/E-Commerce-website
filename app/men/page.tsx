import Mens from '@/components/Mens'
import ShoesMale from '@/components/ShoesMale'
import React from 'react'

const men = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl pt-7 md:pl-[40%] pl-[6%] font-bold mb-4 text-center md:text-left text-[#709ec9]">
        Men&apos;s category
      </h2>
        <Mens/>
        <ShoesMale/>
    </div>
  )
}

export default men