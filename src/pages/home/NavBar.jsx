import { useState } from "react";
import Container from "./Container";
import { X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-20 bg-dark/90 backdrop-blur border-b border-secondary/40">
            <Container>
                <div className="flex items-center justify-between h-16">
                    <a
                        href="#"
                        className="text-2xl font-bold tracking-tight text-primary hover:text-accent transition"
                    >
                        Oladiipo Ayomide
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
                        <a href="#projects" className="text-white hover:text-primary transition">
                            Projects
                        </a>
                        <a href="#experience" className="text-white hover:text-primary transition">
                            Experience
                        </a>
                        <a href="#skills" className="text-white hover:text-primary transition">
                            Skills
                        </a>
                        <a href="#writing" className="text-white hover:text-primary transition">
                            Writing
                        </a>
                        <a href="#contact" className="text-white hover:text-accent transition">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="sm:hidden text-white hover:text-primary transition"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </Container>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={toggleMenu}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-[black] text-white z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-secondary/40">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={toggleMenu} className="hover:text-primary transition">
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col gap-4 p-6 text-sm font-medium">
                    <a href="#projects" onClick={toggleMenu} className="hover:text-primary transition">
                        Projects
                    </a>
                    <a href="#experience" onClick={toggleMenu} className="hover:text-primary transition">
                        Experience
                    </a>
                    <a href="#skills" onClick={toggleMenu} className="hover:text-primary transition">
                        Skills
                    </a>
                    <a href="#writing" onClick={toggleMenu} className="hover:text-primary transition">
                        Writing
                    </a>
                    <a href="#contact" onClick={toggleMenu} className="hover:text-accent transition">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;