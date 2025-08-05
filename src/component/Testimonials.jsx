import React from 'react'
import Star from '../assets/Stars.svg'
import ClientImg  from '../assets/ClientImage.svg'


const Testimonials = () => {
  return (
    <section>
      <div>
        <div className='mt-[80px] mb-8 text-4xl font-bold text-center'>
            <h4>Testimonial</h4>
        </div>
        <div className=' grid grid-cols-[repeat(2,_1fr)] md:grid-cols-[repeat(3,_1fr)] md:gap-3 xl:grid-cols-[repeat(3,_1fr)] gap-4'>
            <div className='bg-gray-100 p-4'>
                <div className=' text-[10px] lg:text-[15px] md:text-[13px] font-semibold'>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
                <div className='flex items-center '>
                    <div>
                        <img src={ClientImg} alt="Client image" />       
                    </div>
                    <div className='py-[30px] px-[9px] text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                        <div>
                            <img src={Star} alt="Star" />
                        </div>
                        <div>
                            <p>Gemma Nolen</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 p-4'>
                <div className=' text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
                <div className='flex items-center '>
                    <div>
                        <img src={ClientImg} alt="Client image" />       
                    </div>
                    <div className='py-[30px] px-[9px] text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                        <div>
                            <img src={Star} alt="Star" />
                        </div>
                        <div>
                            <p>Gemma Nolen</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 p-4'>
                <div className=' text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
                <div className='flex items-center '>
                    <div>
                        <img src={ClientImg} alt="Client image" />       
                    </div>
                    <div className='py-[30px] px-[9px] text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                        <div>
                            <img src={Star} alt="Star" />
                        </div>
                        <div>
                            <p>Gemma Nolen</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 p-4'>
                <div className=' text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
                <div className='flex items-center '>
                    <div>
                        <img src={ClientImg} alt="Client image" />       
                    </div>
                    <div className='py-[30px] px-[9px] text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                        <div>
                            <img src={Star} alt="Star" />
                        </div>
                        <div>
                            <p>Gemma Nolen</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 p-4'>
                <div className=' text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
                <div className='flex items-center '>
                    <div>
                        <img src={ClientImg} alt="Client image" />       
                    </div>
                    <div className='py-[30px] px-[9px] text-[10px] font-semibold'>
                        <div>
                            <img src={Star} alt="Star" />
                        </div>
                        <div>
                            <p>Gemma Nolen</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 p-4'>
                <div className=' text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
                <div className='flex items-center '>
                    <div>
                        <img src={ClientImg} alt="Client image" />       
                    </div>
                    <div className='py-[30px] px-[9px] text-[10px] font-semibold lg:text-[15px] md:text-[13px]'>
                        <div>
                            <img src={Star} alt="Star" />
                        </div>
                        <div>
                            <p>Gemma Nolen</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
