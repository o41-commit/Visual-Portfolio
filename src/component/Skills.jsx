import React from 'react'
import Image from '../assets/SkillsCardIcon.svg'
import Image1 from '../assets/SkillsCardIcon1.svg'
import Image2 from '../assets/SkillsCardIcon2.svg'

const Skills = () => {
  return (
    <section>
      <div className='grid grid-row-1 gap-3 md:grid md:grid-cols-3 gap-2 xl:grid xl:my-[150px] xl:gap-[100px] w-[100%] xl:grid-cols-3'>
        <div>
            <div className=' flex my-[20px] justify-center'>
                <img src={Image2} alt="icon" />
            </div>
            <div className='font-bold text-3xl my-7 text-center'>
                <h4>Product Design</h4>
            </div>
            <div className='text-center text-[17px] font-semibold'>
                <h4>
                    This is a template Figma file, turned into code using Anima. Learn more at <a className='font-bold' href="https://www.animaapp.com/">AnimaApp.com </a>
                </h4>
            </div>
        </div>
        <div>
            <div className='flex my-[20px] justify-center'>
                <img src={Image} alt="icon" />
            </div>
            <div className='font-bold text-3xl my-7 text-center'>
                <h4>Visual Design</h4>
            </div>
            <div className='text-center text-[17px] font-semibold'>
                <h4>
                    This is a template Figma file, turned into code using Anima. Learn more at <a className='font-bold' href="https://www.animaapp.com/">AnimaApp.com</a>
                </h4>
            </div>
        </div>
        <div>
            <div className='flex justify-center my-[20px]'>
                <img src={Image1} alt="icon" />
            </div>
            <div className='font-bold text-3xl my-7 text-center'>
                <h4>Art Direction</h4>
            </div>
            <div>
                <h4 className='text-center text-[17px] font-semibold'>
                    This is a template Figma file, turned into code using Anima. Learn more at <a className='font-bold' href="https://www.animaapp.com/">AnimaApp.com</a>
                </h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
