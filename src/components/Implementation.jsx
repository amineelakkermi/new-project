import React from 'react';
import styles, { layout } from '../style';
import { motion } from "framer-motion"
import { textVariant } from '../motion';

const Implementation = () => {
  return (
    <section className={`min-h-[100vh] my-[150px] ${styles.padding} center flex-col gap-5 `}>
      <div className='bg-mauveBg border-mauve flex gap-2 rounded-[20px] py-2 px-4'>
        <p className='text-mauve text-[13px]'>Implementation</p>
      </div>
      <h2 className={`text-[30px] text-center font-[500] gradient1-color`}>
        A few lines of code is all it takes
      </h2>
      <p className='text-white md:text-start text-center opacity-[0.8] tracking-normal'>
        Effortlessly integrate our secure and reliable API for fast and efficient payment transactions.
      </p>

      <div className={`${layout.section} ${styles.paddingX}`}>
        <div className={`${layout.sectionInfo} center gap-5`}>
          <div className='flex gap-3 hover:bg-black hover:border-[green] px-6 py-4 rounded-[15px]'>
            <p className={`text-white max-w-[380px] text-[15px] opacity-[0.7]`}>
              Simplify payment system integration with user-friendly documentation.
            </p>
          </div>
          <div className='flex gap-3 hover:bg-black hover:border-[green] px-6 py-4 rounded-[15px]'>
            <p className={`text-white max-w-[380px] text-[15px] opacity-[0.7]`}>
              Easily customize payment features with minimal effort using our API.
            </p>
          </div>
          <div className='flex gap-3 hover:bg-black hover:border-[green] px-6 py-4 rounded-[15px]'>
            <p className={`text-white max-w-[380px] text-[15px] opacity-[0.7]`}>
              Supports various programming languages for seamless integration.
            </p>
          </div>
        </div>

        <div className={`${layout.sectionImg}`}>
          <div className='py-3 px-6 rounded-[20px] border-green w-[100%]'>
            <pre className='opacity-[0.5] leading-[25px] text-[16px] text-white'>
              <code className='max-w-[150px]'>
                {`
import requests
url = 'https://api.wallet.com/connect'
params = {'wallet_id': '123456', 'api_key': 'abcdefg'}
response = requests.post(url, data=params)
if response.status_code == 200:
    print('Connected to wallet API successfully!')
else:
    print('Failed to connect to wallet API.')
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <motion.div
       variants={textVariant(0.5)}
       initial='hidden'
       whileInView='show' 
       className='circle4 z-0 rounded-full '/>
     
    </section>
  );
};

export default Implementation;
