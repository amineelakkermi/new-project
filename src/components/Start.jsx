import React from 'react'
import styles from '../style'
import { heroImg } from '../assets'
import { motion } from "framer-motion"
import { textVariant } from '../motion'

const Start = () => {
  return (
    <section className={`relative h-[100vh] ${styles.padding} center flex flex-col `} >
      
      <div className='w-full center flex flex-col gap-3'>
      <div>
        <img src={heroImg} alt="Img"  className='hero-img image-with-shadow w-[80px] h-[80px] '/>
      </div>
    
        <h1 className={`font-medium text-[45px]  xs:leading-[65.8px] leading-[66.8px] w-full mt-10 text-grey text-center max-w-[860px]`}>
        Get started today for free
        </h1>
        <p className={`${styles.paragraph} text-center max-w-[460px] mt-5`}>Streamline your payment process with effortless wallet API integration for businesses and more.</p>
       
        <button className='md:block hidden start-button2  py-2 px-4 rounded-[50px] w-[130px]'><a href="#start" className='text-white'>Get Started</a></button>

      </div>  


      <motion.div
       variants={textVariant(0.5)}
       initial='hidden'
       whileInView='show' 
       className='circle2 z-0 rounded-full '/>
     

     
    </section>
  )
}

export default Start