import React from 'react'
import styles from '../style'
import { motion } from "framer-motion"
import { textVariant } from '../motion'


const feedBack = [
  { 
    id: 1,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg>,
    text: "I can't imagine running my business without this wallet API. It's streamlined my payment processing and saved me so much time!",
   
    name: "Youssef Ahmed",
    statut : "Co-founder, Liver",
     
   },
   { 
    id: 2,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" color='grey' viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>,
    text: "This wallet API has revolutionized how I manage payments in my business. It's a lifesaver, significantly cutting down on processing time.",
   
    name: "Layla Khalid",
    statut : " Marketing Strategy",
     
   },
   { 
    id: 3,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" color='grey' viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>,
    text: "My business operations have been transformed by this wallet API. It's simplified payment handling, giving me back valuable time that I can now invest.",
   
    name: "Omar Abbas",
    statut : "Lead Designer",
     
   },
   { 
    id: 4,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" color='grey' viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>,
    text: "I rely heavily on this wallet API for seamless payment processing in my business. It's boosted efficiency and saved me hours each week.",

    name: "Fatima Hassan",
    statut : " Software Engineer",
     
   },
   { 
    id: 5,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" color='grey' viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>,
    text: "Implementing this wallet API was the best decision for my business. It's optimized payment processes, freeing up my schedule for more strategic tasks",
   
    name: "Ali Ibrahim",
    statut : "Logistics Manager",
     
   },
   { 
    id: 6,
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" color='grey' viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>,
    text: "Using this wallet API has been a game-changer for my business. It's incredibly efficient, and I've saved countless hours on payment processing!",
    
    name: "Sarah K.",
    statut : "Quality Control",
     
   },
]

const Community = () => {
  return (
    <section className={`relative min-h-[100vh] my-[150px] ${styles.padding} center flex-col gap-5`}>
      <div className='bg-mauveBg  border-mauve flex gap-2 rounded-[20px] py-2 px-4'>
        <p className='text-mauve text-[13px]'>Community Wall</p>
      </div>
      <h2 className={`text-[30px] font-[500] gradient-color`}>
      Loved by a global community
      </h2>
      <p className='text-white opacity-[0.8] tracking-normal'>
      See what our satisfied customers are saying about our wallet API
      </p>

      <div className='relative w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 mt-24'>
      
      {
        feedBack.map((item , index) => (
          <div key={item.id} className='bg-[transparent] flex gap-5 flex-col p-4 rounded-[20px] border-mauve'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" color='grey' viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
          </svg>
          <p className='text-[16px] opacity-[0.6] max-w-[350px] text-white'>
           {item.text}
          </p>
          <div className='flex items-center gap-5 mt-5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color='white'  fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
           <div className='flex flex-col gap-1'>
           <span className='text-white text-[14px]'>{item.name}</span>
           <span className='text-[14px] text-white opacity-[0.5]'>{item.statut}</span>
          </div>
           </div>
          </div>
        ))
      }
     
      
     
       
      
      
     
      </div>

      <motion.div
       variants={textVariant(0.5)}
       initial='hidden'
       whileInView='show' 
       className='circle3 z-0 rounded-full '/>
     

     
    </section>
  )
}

export default Community