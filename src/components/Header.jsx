import React, { useState, useRef, useEffect } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Header = ({ scrollToSection }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsNavbarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='w-full h-[80px] border-b border-[#5c5b5b] fixed top-0 left-0 bg-[#191c20] z-50'>
            <div className='w-full h-full flex items-center justify-between px-5 sm:px-10 lg:px-20'>
                <h1>Ayotech</h1>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex items-center gap-10'>
                    <li onClick={() => scrollToSection('hero')} className="cursor-pointer">Home</li>
                    <li onClick={() => scrollToSection('about')} className="cursor-pointer">About</li>
                    <li onClick={() => scrollToSection('skills')} className="cursor-pointer">Skills</li>
                    <li onClick={() => scrollToSection('projects')} className="cursor-pointer">Projects</li>
                    <li onClick={() => scrollToSection('contact')} className="cursor-pointer">Contact</li>
                </ul>
                <button 
                    onClick={() => scrollToSection('contact')} 
                    className='hidden lg:block bg-primary px-6 py-2 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300'
                >
                    Hire Me
                </button>

                <div className='lg:hidden'>
                    {isNavbarOpen ? (
                        <IoMdClose className='text-2xl cursor-pointer' onClick={() => setIsNavbarOpen(false)} />
                    ) : (
                        <IoMdMenu className='text-2xl cursor-pointer' onClick={() => setIsNavbarOpen(true)} />
                    )}
                </div>
            </div>

            <div
                ref={navRef}
                className={`lg:hidden fixed top-0 left-0 w-[65%] sm:w-[50%] h-full bg-[black] shadow-md transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className='flex flex-col gap-6 mt-20 p-5'>
                    <li onClick={() => { scrollToSection('hero'); setIsNavbarOpen(false); }} className="cursor-pointer">Home</li>
                    <li onClick={() => { scrollToSection('about'); setIsNavbarOpen(false); }} className="cursor-pointer">About</li>
                    <li onClick={() => { scrollToSection('skills'); setIsNavbarOpen(false); }} className="cursor-pointer">Skills</li>
                    <li onClick={() => { scrollToSection('contact'); setIsNavbarOpen(false); }} className="cursor-pointer">Contact</li>
                    <li onClick={() => { scrollToSection('projects'); setIsNavbarOpen(false); }} className="cursor-pointer">Projects</li>
                    <button 
                        onClick={() => { scrollToSection('contact'); setIsNavbarOpen(false); }} 
                        className='bg-primary px-6 py-2 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300'
                    >
                        Hire Me
                    </button>
                </ul>
            </div>
        </header>
    );
};

export default Header;
