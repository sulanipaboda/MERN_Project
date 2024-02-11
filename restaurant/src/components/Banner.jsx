import React from 'react'
import banner from '../assets/banner.png'
import food1 from '/home/b-food1.png'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC]to 100%'>
      <div className='py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        {/* images */}
        <div className='md:w-1/2'>
                <img src={banner} alt='' />

                <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                    <div className='bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64'>
                        <img src={food1} alt='' className='rounded-2xl' />

                        <div className='space-y-1'>
                            <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                            <div className='rating rating-sm'>
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    checked
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                            </div>
                            <p className='text-red'>$18.00</p>
                        </div>
                    </div>

                    <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                        <img src={food1} alt='' className='rounded-2xl' />

                        <div className='space-y-1'>
                            <h5 className='font-medium mb-1'>Spicy Noodles</h5>
                            <div className='rating rating-sm'>
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    checked
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                                <input 
                                    type='radio'
                                    name='rating-2'
                                    className='mask mask-star-2 bg-yellow-500'
                                    readOnly
                                />
                            </div>
                            <p className='text-red'>$18.00</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text:5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-orange'>Food</span></h2>
                <p className=' text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn bg-orange border-none px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
