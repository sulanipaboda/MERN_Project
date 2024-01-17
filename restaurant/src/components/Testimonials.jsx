import React from 'react'
import { FaStar } from 'react-icons/fa';
import testimonial from '../../public/home/testimonials/testimonials.png'
import testimonial1 from '../../public/home/testimonials/testimonial1.png'
import testimonial2 from '../../public/home/testimonials/testimonial2.png'
import testimonial3 from '../../public/home/testimonials/testimonial3.png'


const Testimonials = () => {
  return (
    <div className='section-container'>
       <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='md:w-1/2'>
                <img src={testimonial} alt='' />
            </div>
            <div className='md:w-1/2'>
                <div className='text-left'>
                    <p className='subtitle'>TESTIMONIALS</p>
                    <h2 className='title'>What Our Customers Say About Us</h2>
                    <blockquote className=' my-5 text-secondary leading=[30px]'>
                        "I had the pleasure of dining at Foodi last night, and I'm still 
                        raving about the experience! The attention to detail in presentation 
                        and service was impeccable."
                    </blockquote>

                    {/* avatar */}
                    <div>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar bg-white">
                                <div className="w-12">
                                <img src={testimonial1} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <img src={testimonial2} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                <img src={testimonial3} />
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="w-12 bg-neutral text-neutral-content">
                                <span>+99</span>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-1'>
                            <h5 className='text-lg font-semibold'>Customer Feedback</h5>
                            <div className='flex items- '>
                                <FaStar className="text-yellow-400" />
                                <span className='font-medium'>4.9</span><span>(18.6k Reviews)</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials