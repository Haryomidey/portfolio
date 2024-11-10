import React from 'react'
import HeroImage from '../assets/images/hero.png';
import { motion } from 'framer-motion';
import Stats from './Stats';

const Hero = ({scrollToSection}) => {
    return (
        <div className='pb-10 pt-[120px] px-5 sm:px-10 lg:px-40'>
            <div className='w-full h-full flex flex-col justify-center items-center text-center'>
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: '0%', opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={HeroImage} alt="hero-image" />
                </motion.div>
                <h1 className='text-4xl sm:text-5xl font-semibold mt-6'>Hi, I am <span className='text-primary'>Ayotech</span></h1>
                <motion.p 
                    initial={{ y: '100%', opacity: 0 }}
                    whileInView={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='max-w-[750px] text-sm mt-4 text-[#c5c5c5]'>
                    I'm a versatile developer with a passion for creating modern, user-friendly web applications that work easily across different platforms. I'm very good at using the latest technologies like HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React, and Next.js to build responsive designs that make a real impact
                </motion.p>
                <div className='mt-8 flex items-center flex-wrap gap-3'>
                    <motion.button
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        onClick={() => scrollToSection('contact')} className='border-2 border-primary bg-primary px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300 w-full sm:w-fit'>Hire Me</motion.button>
                    <motion.button 
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='border-2 border-primary px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300 w-full sm:w-fit'>Download CV</motion.button>
                </div>
                <Stats />
            </div>
        </div>
    )
}

export default Hero
