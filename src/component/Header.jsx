import React from 'react'
import Image from '../assets/HeaderImage.svg'

const Header = () => {
  return (
    <section>
        <div className=' width-full items-center xl:flex xl:gap-1 xl:my-[60px] md:flex md:item-center md:my-[60px]'>
            <div className='w-[100%] md'>
                <div className='font-bold text-[24px] my-6 mt-[70px] text-1xl xl:text-3xl'>
                    <h4>Branding <span className='border-l-[2px] border-black border-solid pl-[4px] '>image making</span> </h4>
                </div>
                <div className='text-[60px] font-bold font-semibold my-6 xl:text-8xl md:text-6xl'>
                    <h2>Visual Designer</h2>
                </div>
                <div className='text-[18px] max-w-[250px] xl:max-w-[550px] md:max-w-[450px]'>
                <h5>
                    This is a template Figma file, turned into code using Anima. 
                    <p>Learn more at <a className='font-semibold' href="https://www.animaapp.com/">AnimaApp.com</a></p>
                </h5>  
                </div>
                <div className=' bg-black my-8 w-[100px] h-[50px] p-7 cursor-pointer flex items-center rounded-md text-white xl:w-[200px] md:w-[170px]'>
                    <a href="#">
                        <h4 className='md:p-7 p-[2px]'>Contact</h4>
                    </a>
                </div>
            </div>
            <div>
                <div>
                <img src={Image} alt="A lady image" />               
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header
