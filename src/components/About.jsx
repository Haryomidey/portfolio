import React from 'react';
import { motion } from 'framer-motion';
import Doodle from '../assets/images/doodle.png';

const About = ({ scrollToSection }) => {
    return (
        <div className='mt-16 sm:mt-28 w-full pb-10 pt-10 px-5 sm:px-10 lg:px-40'>
            <div className='w-full text-center'>
                <h2 className='text-3xl sm:text-4xl font-semibold'>About Me</h2>
                <p className='text-[#c5c5c5] text-sm sm:text-base'>Web and Python developer</p>
                <div className='w-full grid sm:grid-cols-2 gap-16 sm:gap-16 mt-10'>
                    <motion.div
                        className='relative w-full'
                        initial={{ x: '-100%', opacity: 0 }}
                        whileInView={{ x: '0%', opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img src={Doodle} alt="" className='rounded-lg w-full object-cover' />
                    </motion.div>

                    <motion.div
                        className='sm:text-justify text-[#c5c5c5] text-sm sm:text-base'
                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={{ x: '0%', opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I'm a versatile developer with a passion for creating modern, user-friendly web applications that work easily across different platforms. I'm very good at using the latest technologies like HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React, and Next.js to build responsive designs that make a real impact. I also bring a strong background in Python, particularly in web scraping, automation, and data processing. I use libraries like Beautiful Soup, Selenium, Pandas, Matplotlib, and NumPy to gather, analyze, and visualize data efficiently.
                            <br /><br />
                            On the back-end, I have experience with Node.js, Express.js and enjoy designing full-stack solutions that are both scalable and efficient. I'm always looking for ways to optimize processes, reduce waste of time, and help teams make data-driven decisions that push projects forward.
                        </p>
                        <button onClick={() => scrollToSection('contact')} className='border-2 border-primary text-white bg-primary mt-4 px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300'>
                            Let's Talk
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About;
