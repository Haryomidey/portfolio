import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/images/hero.png';
import Stats from './Stats';

const Hero = ({ scrollToSection }) => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='pb-10 pt-[120px] px-5 sm:px-10 lg:px-40'>
            <motion.div 
                className='w-full h-full flex flex-col justify-center items-center text-center'
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div variants={fadeUpVariants}>
                    <img src={HeroImage} alt="hero-image" />
                </motion.div>
                
                <motion.h1 
                    className='text-4xl sm:text-5xl font-semibold mt-6' 
                    variants={fadeUpVariants}
                >
                    Hi, I am <span className='text-primary'>Ayotech</span>
                </motion.h1>
                
                <motion.p 
                    className='max-w-[750px] text-sm mt-4 text-[#c5c5c5]' 
                    variants={fadeUpVariants}
                >
                    I'm a versatile developer with a passion for creating modern, user-friendly web applications that work easily across different platforms. I'm very good at using the latest technologies like HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React, and Next.js to build responsive designs that make a real impact.
                </motion.p>
                
                <motion.div 
                    className='mt-8 flex items-center flex-wrap gap-3'
                    variants={fadeUpVariants}
                >
                    <button 
                        onClick={() => scrollToSection('contact')} 
                        className='border-2 border-primary bg-primary px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300 w-full sm:w-fit'
                    >
                        Hire Me
                    </button>
                    
                    <button 
                        className='border-2 border-primary px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300 w-full sm:w-fit'
                    >
                        Download CV
                    </button>
                </motion.div>
                
                <motion.div variants={fadeUpVariants}>
                    <Stats />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero;
