import React from 'react'

const NavBar = () => {
  return (
    <section className='fixed top-0 left-0 px-9 py-0 my-0 w-full bg-white z-50'>
        <nav className='my-5'>
            <div className='text-black-600 flex justify-between items-center'>
                <div className='font-bold text-2xl cursor-pointer hover:scale-110'>
                    <h4>Logo</h4>
                </div>
                <div>
                    <ul className='flex justify-between gap-6'>
                        <li className='cursor-pointer hover:font-bold hover:border-b-[2px] hover:border-black transition-all duration-300 ease-in-out'>
                            About
                        </li>
                        <li className='cursor-pointer hover:border-b-[2px] hover:border-black hover:font-bold transition-all duration-300 ease-in-out'>
                            Work
                        </li>
                        <li className='cursor-pointer hover:border-b-[2px] hover:border-black hover:font-bold transition-all duration-300 ease-in-out'>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default NavBar
