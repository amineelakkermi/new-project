import React from 'react'
import styles from '../style'
import { heroImg } from '../assets'
import { motion } from "framer-motion"
import { textVariant } from '../motion'

const Hero = () => {
  return (
    <section className={`relative min-h-[100vh]  ${styles.padding} center flex flex-col `} >
      <motion.div
      variants={textVariant(0.5)}
      initial='hidden'
      animate='show' 
      className='circle rounded-full' />
     
     
      <motion.div
      variants={textVariant(0.6)}
      initial='hidden'
      animate='show' 
      className='circle1 rounded-full '/>
     
      

      <div className='w-full center flex flex-col gap-3'>
      <div>
        <img src={heroImg} alt="Img"  className='hero-img image-with-shadow w-[80px] h-[80px] '/>
      </div>
    
        <h1 className={`${styles.title} text-grey text-center max-w-[860px]`}>Make it easy for customers to connect to any wallet API</h1>
        <p className={`${styles.paragraph} text-center max-w-[460px] mt-5`}>Streamline your payment process with effortless wallet API integration for businesses and more.</p>
       
        <div class="input-container my-5 flex justify-center items-center p-1">
        <input type="text" placeholder='Enter your email' className='bg-transparent py-2 px-4 w-[300px] text-white input' />
        <button className='subscribe-button py-2 px-4 center rounded-[50px] w-[130px]' ><a href="#start" className='text-white'>Subscribe</a></button>
        </div>
      </div>  
     

     
    </section>
  )
}

export default Hero