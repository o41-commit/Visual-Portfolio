import React from 'react'
import { FaFacebook,  FaDiscord, FaDribbble, FaInstagram, FaBehance } from 'react-icons/fa';



const Contact = () => {
  return (
    <section>
      <div className='mt-9'>
        <div className='text-9l font-bold my-7'>
            <h3>Lets work together</h3>
        </div>
        <div className= 'grid grid-cols-2  gap-4'>
            <div>
                <div className='font-semibold text-[12px] lg:text-[20px] md:text-[15px] max-w-[90%] '>
                    <h4>
                        This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                        This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                    </h4>
                </div>
                <div className='flex gap-3 my-4 xl:text-2xl text-black lg:gap-16 md:gap-10 hover:text-gray-900'>
                    <a href="#"><FaFacebook/></a>
                    <a href="#"><FaDiscord/></a>
                    <a href="#"><FaDribbble/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaBehance/></a>
                </div>

            </div>
            <div>
                <form>
                <div className='mb-4 bg-gray-100 p-2'>
                <label
                    className='text-black font-bold'
                    >Name</label
                >
                <input
                    type='text'
                    name='Name'
                    className='bg-gray-100 w-[80%] border-[0.1px] m-2 border-black'
                />
                </div>
                <div className='mb-4 bg-gray-100 p-2'>
                <label
                    className='text-black font-bold'
                    >Email</label
                >
                <input
                    type='email'
                    name='email'
                    className='bg-gray-100 w-[80%] border-[0.1px] m-2 border-black'
                />
                </div>
                <div>
                <button
                    className='bg-black hover:bg-gray-600 text-white font-bold py-2 mt-[0.4px] mb-2 px-4 focus:outline-none focus:shadow-outline'
                    type='submit'
                >Submit</button>
                </div>
                </form>
                
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
