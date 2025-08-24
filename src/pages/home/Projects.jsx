import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const projects = [
    {
        title: "Klitogram",
        link: "https://klitogram.com",
        description: "A content-sharing and social platform enabling users to connect and create content.",
        stack: ["React", "Express.js", "MongoDB"],
        year: "2024"
    },
    {
        title: "Ponkegold",
        link: "https://ponkegold.fun",
        description: "Web3 meme generator built in collaboration; focused on frontend integration and UX.",
        stack: ["Next.js", "Web3"],
        year: "2024"
    },
    {
        title: "BukaSpot",
        link: "https://bukaspot.co.uk",
        description: "Ordering platform for African food in the UK with smooth browsing and checkout.",
        stack: ["Next.js", "Node.js"],
        year: "2025"
    },
    {
        title: "SurePlay",
        link: 'http://sure-play-jet.vercel.app/',
        description: "A betting platform for player to player betting, featuring real-time odds and secure transactions.",
        stack: ["React.js", "Express.js", "MongoDB"],
        year: "2025"
    },
    {
        title: "Gistoria",
        link: null,
        description: "A blog platform for sharing and discovering stories.",
        stack: ["React", "Express.js", "MongoDB"],
        year: "2024"
    },
    {
        title: "Barty",
        link: null,
        description: "Trade-by-barter platform. Built full stack with a custom matching algorithm for user needs/offers.",
        stack: ["React", "Node.js", "Algorithm Design"],
        year: "2024"
    },
    {
        title: "Igamia",
        link: null,
        description: "Livestreaming, gaming, and coin-mining platform. Collaborated on backend using Nest.js.",
        stack: ["Nest.js", "MogngoDB"],
        year: "2025"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-12 bg-dark">
            <Container>
                <SectionHeading id="projects">Projects</SectionHeading>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    {projects.map((p) => (
                        <div
                            key={p.title}
                            className="bg-dark border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
                        >
                            <div className="flex items-start justify-between">
                                <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                                <span className="text-xs text-gray-50">{p.year}</span>
                            </div>
                            <p className="mt-3 text-sm text-white">{p.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2 text-xs">
                                {p.stack.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            {p.link ? (
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition"
                                >
                                    Visit <ArrowRight size={16} />
                                </a>
                            ) : (
                                <span className="mt-4 inline-flex items-center gap-1 text-sm text-gray-50">
                                    Private / No link
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;