import React from 'react'
import Image1 from '../assets/Image.svg'
import Image2 from '../assets/Image1.svg'
import Image3 from '../assets/Image2.svg'
import Image4 from '../assets/Image3.svg'
import Image5 from '../assets/Image4.svg'
import Image6 from '../assets/Image5.svg'

const Gallery = () => {
  return (
    <section>
      <div>
        <div>
            <div className='mt-[80px] mb-8 text-4xl font-bold text-center'>
                <h4>Latest work</h4>
            </div>
            <div className='grid grid-cols-[repeat(2,_1fr)] xl:grid-cols-[repeat(3,_1fr)] md:grid-cols-[repeat(3,_1fr)] md:gap-3 gap-4'>
                <div>
                    <div>
                       <img src={Image1} alt="A book image" /> 
                    </div>
                    <div>
                        <h4 className='font-bold mx-3 my-2 text-[20px]'>Project title</h4>
                        <p className='text-[18px] mx-3 my-2'>UI, Art drection</p>
                    </div>
                </div>
                <div>
                    <div>
                       <img src={Image2} alt="A bottle image" /> 
                    </div>
                    <div>
                        <h4 className='font-bold mx-3 my-2 text-[20px]'>Project title</h4>
                        <p className='text-[18px] mx-3 my-2'>UI, Art drection</p>
                    </div>
                </div>
                <div>
                    <div>
                       <img src={Image3} alt="A book image" /> 
                    </div>
                    <div>
                        <h4 className='font-bold mx-3 my-2 text-[20px]'>Project title</h4>
                        <p className='text-[18px] mx-3 my-2'>UI, Art drection</p>
                    </div>
                </div>
                <div>
                    <div>
                       <img src={Image4} alt="A book image" /> 
                    </div>
                    <div>
                        <h4 className='font-bold mx-3 my-2 text-[20px]'>Project title</h4>
                        <p className='text-[18px] mx-3 my-2'>UI, Art drection</p>
                    </div>
                </div>
                <div>
                    <div>
                       <img src={Image5} alt="A book image" /> 
                    </div>
                    <div>
                        <h4 className='font-bold mx-3 my-2 text-[20px]'>Project title</h4>
                        <p className='text-[18px] mx-3 my-2'>UI, Art drection</p>
                    </div>
                </div>
                <div>
                    <div>
                       <img src= {Image6} alt="A book image" /> 
                    </div>
                    <div>
                        <h4 className='font-bold mx-3 my-2 text-[20px]'>Project title</h4>
                        <p className='text-[18px] mx-3 my-2'>UI, Art drection</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
