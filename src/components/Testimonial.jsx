import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import BgImage from '../assets/images/doodle-big.png';
import { motion } from 'framer-motion';

const testimonialsData = [
    {
        id: 1,
        name: "Tolani Jaywon",
        content: "Working with Ayomide has been a great experience. He is very professional and always delivers quality work. I highly recommend him.",
    },
    {
        id: 2,
        name: "Mr. Mohammed",
        content: "Ayomide is a very diligent and hardworking developer, he has built several web applications for me, I must say he is one of the best I have ever worked with.",
    },
    {
        id: 3,
        name: "Mr. Timilehin",
        content: "When you need a developer that can turn things around, bring ideas to live and bring more sales to your product, Ayomide is the guy.",
    },
    {
        id: 4,
        name: "Joseph Williams",
        content: "Ayomide makes building web applications seamless, The speed at which he create scalable, pixel perfect and responsive website, needs to be studied. He is a master of his craft.",
    },
];

const Testimonial = () => {
    return (
        <div className="py-20 sm:py-40 px-5 sm:px-10 lg:px-20 text-center" style={{backgroundImage: `url(${BgImage})`}}>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        className="relative gradient rounded-xl shadow-lg p-6 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <FaUserCircle className="text-6xl text-white mb-4" />
                        <div className="text-white mb-4 text-center relative">
                            <p className='absolute' ><FaQuoteLeft /></p>
                            <span className='ml-4'>{testimonial.content}</span>
                            <p className='absolute -bottom-4 right-0'><FaQuoteRight /></p>
                        </div>
                        <span className="text-lg font-semibold text-white mt-auto">{testimonial.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
