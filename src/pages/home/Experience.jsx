import Container from "./Container";
import SectionHeading from "./SectionHeading";

const experience = [
    {
        role: "Full Stack Developer",
        company: "Deeplord Consult",
        period: "June 2023 - August 2024",
        bullets: [
            "Designed and developed the company's real estate management website.",
            "Optimized performance and improved SEO ranking.",
            "Integrated backend services for property listing and management."
        ]
    },
    {
        role: "Frontend Developer",
        company: "Brainiacs",
        period: "September 2023 - June 2025",
        bullets: [
            "Built NGO sites, VTU systems, e-commerce, and agency platforms.",
            "Implemented reusable UI components with React and Next.js.",
            "Collaborated with backend teams for scalable API integrations."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-12 bg-dark">
            <Container>
                <SectionHeading id="experience">Experience</SectionHeading>
                <div className="mt-8 space-y-6">
                    {experience.map((job) => (
                        <div
                            key={job.company}
                            className="bg-dark rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-lg font-semibold text-gray">
                                    {job.role}{" "}
                                    <span className="text-primary">@ {job.company}</span>
                                </h3>
                                <span className="text-sm text-secondary">{job.period}</span>
                            </div>
                            <ul className="list-disc ml-6 mt-3 text-sm space-y-2 text-white">
                                {job.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Experience;