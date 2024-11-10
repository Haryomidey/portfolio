import React from 'react'
import ContactImage from '../assets/images/contact.png';


const Contact = () => {
    return (
        <div className='mt-10 sm:mt-20 px-5 pt-10 sm:pt-20 sm:px-10 lg:px-40 pb-20'>
            <div className='w-full grid sm:grid-cols-2 gap-16'>
                <div className=''>
                    <h2 className='font-semibold text-3xl sm:text-4xl mb-4'>Got a project in <span className='text-primary'>mind?</span></h2>
                    <img src={ContactImage} alt="" />
                </div>
                <div className='text-xs sm:text-base'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='name' className='ml-1'>Name</label>
                            <input type="text" name="" id="name" className='bg-[#2d333b] py-2 px-4 h-[45px] rounded-xl' placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='email' className='ml-1'>Email</label>
                            <input type="email" name="" id="email" className='bg-[#2d333b] py-2 px-4 h-[45px] rounded-xl' placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <label htmlFor='message' className='ml-1'>Message</label>
                            <textarea name="" id="message" className='bg-[#2d333b] py-2 px-4 min-h-[300px] max-h-[300px] rounded-xl' placeholder='Enter your message'></textarea>
                        </div>
                    </div>
                    <button className='border-2 border-primary text-white bg-primary mt-4 px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300'>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
