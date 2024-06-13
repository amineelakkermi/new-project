import React from 'react'
import styles from '../style'
import { developers } from '../assets'
import { motion } from "framer-motion"
import { textVariant } from '../motion'

const Developers = () => {
  return (
    <section className={`min-h-[100vh] relative ${styles.padding} center flex-col gap-5`}>
    <motion.div
       variants={textVariant(0.5)}
       initial='hidden'
       whileInView='show' 
       className='circle5 rounded-full '/>
   
    <div className='bg-mauveBg border-mauve flex gap-2  rounded-[20px] py-2 px-4'>
       <p className='text-textBlue text-[13px]'>SDK for Developers</p>
    </div>
    <h2 className={`text-[30px] font-[600] text-textBlue text-center `}>Built for developers worldwide</h2>
    <p className='text-white opacity-[0.8] tracking-normal text-center max-w-[450px]'>
    Build smarter payment systems with our wallet API with ease for Web3 developers.</p>
    <div className='w-full sm:mt-16 mt-0 center h-auto'>
    <img src={developers} alt="developers" className='w-[80%] h-[100%]' />
    </div>

    <div className='md:absolute relative md:top-[80%] center flex-col gap-16 my-16'>
   
     <div className='center  sm:flex-row flex-col gap-10'>
    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <h4 className='text-white font-semibold text-[16px] opacity-[0.9]'>Easy-to-use interface</h4>
        </div>
        <p className={`text-[14px] text-white max-w-[280px] opacity-[0.5]`}>An intuitive interface that provides clear instructions and feedback.</p>
    </div>

    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <h4 className='text-white font-semibold text-[16px]'>Fast payment processing</h4>
        </div>
        <p className={`text-[14px] text-white max-w-[280px] opacity-[0.5]`}>
        Process payments quickly and efficiently to avoid delays.</p>
    </div>

    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <h4 className='text-white font-semibold text-[16px]'>Multiple payment options</h4>
        </div>
        <p className={`text-[14px] text-white max-w-[280px] opacity-[0.5]`}>
        Supports various payment methods, including credit & debit cards.</p>
    </div>

     </div>

     <div className='center  sm:flex-row flex-col gap-10'>
    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <h4 className='text-white font-semibold text-[16px]'>Robust security</h4>
        </div>
        <p className={`text-[14px] text-white max-w-[280px] opacity-[0.5]`}>
        Secure gateways, SSL encryption, and two-factor authentication.</p>
    </div>
    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <h4 className='text-white font-semibold text-[16px]'>Popular platform integration</h4>
        </div>
        <p className={`text-[14px] text-white max-w-[280px] opacity-[0.5]`}>
        Integrate with popular e-commerce platforms, such as Shopify and more.
        </p>
    </div>

    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <h4 className='text-white font-semibold text-[16px]'>Comprehensive reporting</h4>
        </div>
        <p className={`text-[14px] text-white max-w-[280px] opacity-[0.5]`}>
        Detailed reporting and analytics features to track and analyze data.
        </p>
    </div>
     </div>

    </div>
    </section>
  )
}

export default Developers


