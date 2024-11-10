import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ContactImage from '../assets/images/contact.png';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.name) {
            toast.error('Name is required');
            return false;
        }
        if (!formData.email) {
            toast.error('Email is required');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email');
            return false;
        }
        if (!formData.message) {
            toast.error('Message is required');
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Message sent successfully');
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error(data.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('There was an error sending your message');
        }
    };

    return (
        <div className='mt-10 sm:mt-20 px-5 pt-10 sm:pt-20 sm:px-10 lg:px-40 pb-20'>
            <div className='w-full grid sm:grid-cols-2 gap-16'>
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: '0%', opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className=''>
                    <h2 className='font-semibold text-3xl sm:text-4xl mb-4'>Got a project in <span className='text-primary'>mind?</span></h2>
                    <img src={ContactImage} alt="" />
                </motion.div>
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    whileInView={{ x: '0%', opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-xs sm:text-base'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='name' className='ml-1'>Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                className='bg-[#2d333b] py-2 px-4 h-[45px] rounded-xl'
                                placeholder='Enter your name'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='email' className='ml-1'>Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                className='bg-[#2d333b] py-2 px-4 h-[45px] rounded-xl'
                                placeholder='Enter your email'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col gap-1 col-span-2'>
                            <label htmlFor='message' className='ml-1'>Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                className='bg-[#2d333b] py-2 px-4 min-h-[300px] max-h-[300px] rounded-xl'
                                placeholder='Enter your message'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className='border-2 border-primary text-white bg-primary mt-4 px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300'>
                        Send message
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
