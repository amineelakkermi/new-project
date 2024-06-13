import React from 'react'
import styles from '../style'
import { avalanche, nansen, near, polygon } from '../assets'

const Brand = () => {
  return (
    <div className={`${styles.padding} center my-10`}>
       <div className='flex items-center gap-16'>
        <img src={near} alt="near" className='w-[100px] transition ease-in-out delay-100 opacity-[0.5] hover:opacity-[1]' />
        <img src={nansen} alt="nansen" className='w-[100px] transition ease-in-out delay-100 opacity-[0.5] hover:opacity-[1]' />
        <img src={avalanche} alt="avalanche" className='w-[120px] transition ease-in-out delay-100 opacity-[0.5] hover:opacity-[1]' />
        <img src={polygon} alt="polygon" className='w-[120px] transition ease-in-out delay-100 opacity-[0.5] hover:opacity-[1]' />
       </div>
    </div>
  )
}

export default Brand