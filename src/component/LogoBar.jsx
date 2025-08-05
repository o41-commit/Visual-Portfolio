import React from 'react'
import Image1 from '../assets/ImageTraced1.svg'
import Image2 from '../assets/ImageTraced2.svg'
import Image3 from '../assets/ImageTraced3.svg'
import Image4 from '../assets/ImageTraced4.svg'

const LogoBar = () => {
  return (
    <section>
      <div>
        <ul className='flex gap-[39px] items-center xl:gap-[200px] md:gap-[130px] md:my-[80px] my-[50px]'>
            <li className='font-bold text-2xl'>Goggle</li>
            <li><img src={Image1} alt="Nike image" /></li>
            <li><img src={Image2} alt="Apple image" /></li>
            <li><img src={Image3} alt="Samsung image" /></li>
            <li><img src={Image4} alt="Adidas image" /></li>
        </ul>
      </div>
    </section>
  )
}

export default LogoBar
