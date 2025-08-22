import { Github, Linkedin, Mail } from "lucide-react";
import Container from "./Container";

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-dark">
            <Container>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
                    <p className="text-gray-300 mt-2 max-w-xl mx-auto">
                        Whether it's building products, writing impactful content, or collaborating on fresh ideas — 
                        I'm always open to meaningful opportunities.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl shadow-sm p-8 bg-dark">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold text-white">Let's build something great</h3>
                            <p className="text-sm text-gray-300 mt-1">
                                Open to roles, collaborations, and freelance projects.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-end gap-3">
                            <a
                                href="mailto:oladiipoayomide2021@gmail.com"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
                            >
                                <Mail size={18} /> Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ayomide-oladiipo"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition"
                            >
                                <Linkedin size={18} /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/Haryomidey"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition"
                            >
                                <Github size={18} /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;