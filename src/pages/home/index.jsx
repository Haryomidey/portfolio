import React, { useRef } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Testimonial from '../../components/Testimonial';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Home = () => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const testimonialRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        switch(section) {
            case 'hero':
                heroRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about':
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'skills':
                skillsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'testimonial':
                testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <div ref={heroRef}><Hero scrollToSection={scrollToSection} /></div>
            <div ref={aboutRef}><About scrollToSection={scrollToSection} /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={projectsRef}><Projects /></div>
            <div ref={testimonialRef}><Testimonial /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer scrollToSection={scrollToSection}/>
        </div>
    );
};

export default Home;
