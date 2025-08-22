import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
    {
        degree: "Bachelor's Degree in Mechanical Engineering",
        school: "University of Lagos",
        period: "2018 - 2024"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-12 bg-dark">
            <Container>
                <SectionHeading id="education">Education</SectionHeading>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {education.map((e, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-dark"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-base">{e.degree}</h3>
                                <p className="text-sm text-white">{e.school}</p>
                                <div className="flex items-center gap-2 mt-1 text-xs text-gray-300">
                                    <Calendar size={14} />
                                    {e.period}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Education;