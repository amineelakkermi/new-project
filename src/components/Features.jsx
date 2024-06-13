import React from 'react';
import styles from '../style';
import { card2 } from '../assets';
import { motion } from 'framer-motion';
import { textVariant } from '../motion';

const FeatureInfo = [
   {
     top: "Viewing Key",
     title: "Scalable ways to transfer on Solana privately or publicly",
     text: "Send and receive SOL or SPL-tokens on Solana without being tracked — stay anonymous.",
     image: card2,
   },
   {
     top: "Fast Transactions",
     title: "Instantly send and receive transactions",
     text: "Experience lightning-fast transaction speeds with Solana's high-performance blockchain.",
     image: card2,
   },
   {
     top: "Decentralized Applications",
     title: "Build and use decentralized applications (dApps)",
     text: "Develop and deploy dApps on Solana's scalable and secure blockchain ecosystem.",
     image: card2,
   }
 ];
 
const Features = () => {
  return (
    <section className={`min-h-[100vh] ${styles.padding} center flex-col gap-5`}>
      <motion.div
        variants={textVariant(0.5)}
        initial='hidden'
        whileInView='show'
        className='circle5 rounded-full'
      />

      <div className='bg-mauveBg border-mauve flex gap-2 rounded-[20px] py-2 px-4'>
        <p className='text-mauve text-[13px]'>Our Features</p>
      </div>
      
      <h2 className={`text-[30px] font-[500] text-textMauve`}>Essential features to get started</h2>
      <p className='text-white opacity-[0.8] tracking-normal'>Key features to look for in a reliable wallet API product.</p>

      <div className={` grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  ${styles.marginY}`}>
        {FeatureInfo.map((item, index) => (
          <motion.div
            key={item.top}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='card center flex-col gap-3 p-6 border-mauve rounded-[20px]'
          >
            <div className='bg-mauveBg border-mauve flex gap-2 my-2 rounded-[20px] py-2 px-4'>
              <p className='text-mauve text-[13px] font-semibold tracking-[0.8px]'>{item.top}</p>
            </div>
            <h3 className='text-white text-[20px] max-w-[90%] text-center'>
              <span className='first-words text-mauve'>
              {item.title.split(' ').slice(0, 2).join(' ')}</span> {' '}
              {item.title.split(' ').slice(2).join(' ')}
            </h3>
            <p className='text-[#999] leading-[26.8px] text-[16px] max-w-[90%] text-center'>
              {item.text}
            </p>
            <img src={item.image} alt='card2' className='my-10' />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
