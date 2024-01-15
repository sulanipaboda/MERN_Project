import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC]to 100%'>
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2 space-y-7 px-4'>
            <h2 className='md:text:5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-orange'>Food</span></h2>
            <p className=' text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn bg-orange border-none px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
        </div>
        <div className='md:w-1/2'>
            <img src={banner} alt='' />
        </div>
    </div>
    </div>
  )
}

export default Banner
