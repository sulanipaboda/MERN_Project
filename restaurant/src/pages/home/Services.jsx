import React from 'react'
import testimonial from '../../../public/home/testimonials/testimonials.png'

const Services = () => {
  return (
    <div className='section-container my-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            {/* text */}
            <div className='md:w-1/2'>
                <div className='text-left'>
                    <p className='subtitle'>Our Story & Services</p>
                    <h2 className='title'>Our ulinary Journey And Services</h2>
                    <p className=' my-5 text-secondary leading-[30px]'>
                        Rooted in passion, we curate unforgettable dining experiences and offer exceptional 
                        services, blending culinary artistry with warm hospitality.
                    </p>
                    <button className='btn bg-orange border-none text-white px-8 py-3 rounded-full'>Explore</button>
                </div>
            </div>
            {/* images */}
            <div className='md:w-1/2'>
                <img src={testimonial} alt='' />
            </div>
            
        </div>
    </div>
  )
}

export default Services
