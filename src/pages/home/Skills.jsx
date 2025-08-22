import Container from "./Container";
import SectionHeading from "./SectionHeading";

const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git"
];

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-dark text-white">
            <Container>
                <SectionHeading id="skills">Skills</SectionHeading>
                <ul className="mt-6 flex flex-wrap gap-3 text-sm">
                    {skills.map((s) => (
                        <li
                            key={s}
                            className="px-4 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition shadow-sm"
                        >
                            {s}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Skills;