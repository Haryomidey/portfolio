import React from 'react'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiSocketdotio, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiFigma } from 'react-icons/si'
import { motion } from 'framer-motion'

const Skills = () => {
    const skills = [
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white" /> },
        { name: 'Socket.io', icon: <SiSocketdotio className="text-white" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> }
    ]

    return (
        <div className='mt-20 sm:mt-40 bg-[#030712e0] text-center py-20 px-5 sm:px-10 lg:px-40'>
            <h2 className='text-3xl sm:text-4xl font-semibold text-white'>My Skills</h2>
            <p className='text-sm sm:text-base mt-4 text-[#c5c5c5]'>Skills, Technologies I am really good at:</p>
            <div className='mt-16 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center'>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-col items-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className='text-5xl'>
                            {skill.icon}
                        </div>
                        <span className='mt-2 text-white text-sm'>{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
