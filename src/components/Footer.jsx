import React from 'react'
import styles from '../style'
import { heroImg } from '../assets'

const Footer = () => {
  return (
    <div className={`bg-[#000] px-6 py-8 flex justify-between items-center py-4`}>
     <div className='flex flex-col '>
     <img src={heroImg} alt="logo" className=" w-[56px] h-[56px] object-cover " />
     <span className='text-white text-[12px] opacity-[0.5]'>Lumin Technologies © 2023 </span>
     </div>

     <div className='flex flex-col gap-5'>
     <ul className='flex gap-10'>
      <li className='text-white opacity-[0.8] text-[14px]'><a href="#">Terms of service</a></li>
      <li className='text-white opacity-[0.8] text-[14px]'><a href="#">Privacy Policy</a></li>
      <li className='text-white opacity-[0.8] text-[14px]'><a href="#">Contact Us</a></li>
     </ul>
     <span className='text-white text-[12px] opacity-[0.5]'>
     Creating seamless payments across the globe — all with a few lines of code.
     </span>
     </div>
    </div>
  )
}

export default Footer