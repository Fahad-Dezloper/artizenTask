/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { ReactNode } from 'react';

const MainBg = ({children}: {children: ReactNode}) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center z-[30] justify-center relative'>
      <div className='absolute py-3 px-5 bg-white z-[40] w-fit top-12 left-12 rounded-xl'>
        <img src="/shapes/logo.svg" className='w-36 h-14' />
      </div>
      <img src='/shapes/Ovallight.png' className='w-[50vw] absolute top-0 left-0' />
      <img src='/shapes/Ovallight.png' className='w-[60vw] absolute -right-[30vw] -top-[15vw] scale-x-[-1]' />
        {children}
      <img src='/shapes/Oval.png' className='w-[48vw] absolute -bottom-[4vw] left-0' />
      <img src='/shapes/Oval.png' className='w-[51vw] rotate-[-76deg] absolute -bottom-[10vw] -right-[14vw]' />
    </div>
  )
}

export default MainBg