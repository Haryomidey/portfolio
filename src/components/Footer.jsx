import React from 'react'

import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = ({scrollToSection}) => {
    return (
        <div className='bg-gray-900 w-full px-5 sm:px-20 pt-10 pb-10 text-white'>
            <div className='flex justify-between flex-wrap gap-x-5 gap-y-10 text-xs sm:text-sm'>

            <div className='flex flex-col justify-start max-w-[320px]'>
                <p className='mb-2 text-gray-400'>Get valuable insights, reports and strategy straight to your inbox.</p>
                <div className='flex h-[40px] max-w-full'>
                    <input 
                        type="email" 
                        placeholder="oladiipoayomide2021@gmail.com" 
                        className='w-[80%] h-full py-1 px-3 rounded-l-md outline-none text-sm bg-gray-800'
                    />
                    <button className='bg-primary text-white px-4 py-1 rounded-r-md hover:bg-[#00acb5a2]'>
                        Send
                    </button>
                </div>
            </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3'>
                        <Link to='https://x.com/Ayotech11'>
                            <FaTwitter className='text-gray-400 hover:text-white' />
                        </Link>
                        <Link to='https://web.facebook.com/profile.php?id=100082080325504'>
                            <FaFacebookF className='text-gray-400 hover:text-white' />
                        </Link>
                        <Link to='https://www.linkedin.com/in/oladiipo-ayomide/'>
                            <FaLinkedin className='text-gray-400 hover:text-white' />
                        </Link>
                        <Link to='https://wa.me/2348130771867'>
                            <FaWhatsapp className='text-gray-400 hover:text-white' />
                        </Link>
                    </div>
                    <a href='mailto:oladiipoayomide2021@gmail.com' className='text-gray-400 hover:text-white'>
                        oladiipoayomide2021@gmail.com
                    </a>
                </div>

                <div className='flex flex-col gap-4'>
                    <Link onClick={() => scrollToSection('about')} className='text-gray-400 hover:text-white'>About</Link>
                    <Link onClick={() => scrollToSection('projects')} className='text-gray-400 hover:text-white'>My Works</Link>
                    <Link onClick={() => scrollToSection('skills')} className='text-gray-400 hover:text-white'>Skills</Link>
                    <Link onClick={() => scrollToSection('testimonial')} className='text-gray-400 hover:text-white'>Testimonials</Link>
                </div>

                

                <div className='flex flex-col'>
                    <p className='mb-2 text-gray-400'>Want to work with us?</p>
                    <button onClick={() => scrollToSection('contact')} className='border-primary border px-6 py-2 rounded-md text-sm hover:bg-[#00acb5a2] transition duration-300 ease flex items-center gap-2'>
                        Start a Project
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div className='w-full flex items-center justify-between flex-wrap gap-x-4 gap-y-2 mt-10 text-xs'>
                <p className='text-gray-500'>&copy; {new Date().getFullYear()} Ayotech. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
