import { Github, Linkedin, Mail } from "lucide-react";
import Container from "./Container";
import ProfileImage from "../../assets/images/profile.png";

const Hero = () => {
    return (
        <section className="bg-dark text-white">
            <Container>
                <div className="grid md:grid-cols-[200px_1fr] items-center gap-10 py-16">
                    <div className="flex md:block justify-center">
                        <img
                            src={ProfileImage}
                            alt="Oladiipo Ayomide profile"
                            className="h-48 w-48 rounded-full object-cover border-4 border-primary shadow-lg"
                            onError={(e) => {
                                (e.currentTarget).src =
                                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop";
                            }}
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Oladiipo Ayomide
                        </h1>
                        <h2 className="mt-2 text-xl md:text-2xl text-primary font-semibold">
                            Web Developer | Blogger | Writer
                        </h2>
                        <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
                            I build scalable, user-friendly products with React, Next.js, Express.js, 
                            and Nest.js. Over 3 years delivering real-world solutions across real estate, 
                            e-commerce, NGOs, and web3.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3 text-sm">
                            <a
                                href="mailto:oladiipoayomide2021@gmail.com"
                                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition"
                            >
                                <Mail size={16} /> Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ayomide-oladiipo"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition"
                            >
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/Haryomidey"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-secondary text-white px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition"
                            >
                                <Github size={16} /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;