import { Mail, Linkedin, Github } from "lucide-react";

const Resume = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white text-black p-12 font-sans leading-relaxed print:p-8">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold">Oladiipo Ayomide</h1>
                <p className="text-lg mt-1">Web Developer | React | Next.js | Express.js | Nest.js</p>
                <div className="flex justify-center space-x-6 mt-3 text-sm">
                    <a
                        href="mailto:oladiipoayomide2021@gmail.com"
                        className="flex items-center gap-1 hover:underline"
                    >
                        <Mail size={16} /> oladiipoayomide2021@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ayomide-oladiipo"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:underline"
                    >
                        <Linkedin size={16} /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/Haryomidey"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:underline"
                    >
                        <Github size={16} /> GitHub
                    </a>
                </div>
            </header>

            <section className="mb-8">
                <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-3">Professional Summary</h2>
                <p className="text-justify">
                    Web Developer with 3+ years of experience building scalable web applications using React,
                    Next.js, Express.js, and Nest.js. Skilled in both frontend and backend development with a strong
                    focus on clean architecture, performance, and user-friendly design. Experienced in delivering
                    real-world solutions for industries including real estate, e-commerce, NGOs, and digital services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-3">Technical Skills</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Express.js</li>
                    <li>Nest.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                    <li>Git</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-3">Experience</h2>

                <div className="mb-6">
                    <h3 className="font-semibold text-lg">Full Stack Developer - Deeplord Consult</h3>
                    <p className="text-sm italic mb-2">June 2023 - August 2024</p>
                    <ul className="list-disc ml-6 text-sm space-y-1">
                        <li>Designed and developed the company's real estate management website.</li>
                        <li>Optimized performance and improved SEO ranking.</li>
                        <li>Integrated backend services for property listing and management.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg">Frontend Developer - Brainiacs</h3>
                    <p className="text-sm italic mb-2">September 2023 - June 2025</p>
                    <ul className="list-disc ml-6 text-sm space-y-1">
                        <li>Developed web platforms including NGO sites, VTUs, e-commerce solutions, and agency platforms.</li>
                        <li>Implemented reusable UI components with React and Next.js.</li>
                        <li>Collaborated with backend teams for API integrations and scalable architectures.</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-3">Projects</h2>
                <ul className="space-y-4 text-sm">
                    <li>
                        <strong>Klitogram</strong> - <a href="https://klitogram.com" className="text-blue-600 hover:underline">klitogram.com</a><br />
                        A content-sharing and social platform enabling users to connect and create content. Built with React, Express.js, and MongoDB.
                    </li>
                    <li>
                        <strong>Ponkegold</strong> - <a href="https://ponkegold.fun" className="text-blue-600 hover:underline">ponkegold.fun</a><br />
                        Collaborated on a Web3 meme generator platform in 2024, focusing on frontend integration and user interactions.
                    </li>
                    <li>
                        <strong>BukaSpot</strong> - <a href="https://bukaspot.co.uk" className="text-blue-600 hover:underline">bukaspot.co.uk</a><br />
                        A platform for ordering African food in the UK (2025). Built a seamless user experience for browsing and ordering meals.
                    </li>
                    <li>
                        <strong>Igamia</strong><br />
                        Collaborated with a senior engineer on the backend using Nest.js for a livestreaming, gaming, and coin-mining platform (2025).
                    </li>
                    <li>
                        <strong>Barty</strong><br />
                        Full-stack trade-by-barter platform with a custom matching algorithm to connect users based on needs and offers.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold border-b border-gray-400 pb-1 mb-3">Education</h2>
                <p>
                    <strong>Bachelor's Degree in Mechanical Engineering</strong><br />
                    2018 - 2024
                </p>
            </section>
        </div>
    );
};

export default Resume;