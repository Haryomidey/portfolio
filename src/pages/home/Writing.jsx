import Container from "./Container";
import SectionHeading from "./SectionHeading";

const writings = [
    {
        title: "Technical Articles",
        description:
            "I break down complex concepts in web development, JavaScript frameworks, and backend systems into easy-to-understand articles. My goal is to make tech knowledge accessible to beginners and valuable to professionals.",
        color: "primary"
    },
    {
        title: "Historical Essays",
        description:
            "I explore forgotten stories, revolutions, and underappreciated figures from history. By drawing lessons from the past, I connect them to our modern challenges in a way that resonates with today’s readers.",
        color: "accent"
    },
    {
        title: "Fictional Writing",
        description:
            "I create short stories and narratives that mix suspense, creativity, and human emotion. My fictional pieces often explore what-ifs, untold perspectives, and the realities that live between imagination and truth.",
        color: "white"
    }
];

const Writing = () => {
    return (
        <section id="writing" className="py-12 bg-dark">
            <Container>
                <SectionHeading id="writing">Writing</SectionHeading>
                <p className="mt-4 text-base text-white leading-relaxed max-w-3xl">
                    Beyond building software, I am passionate about writing. My work spans{" "}
                    <span className="text-primary font-medium">technical guides</span> that help developers grow,{" "}
                    <span className="text-accent font-medium">historical essays</span> that uncover overlooked truths, 
                    and <span className="text-gray-100 font-medium">fictional storytelling</span> that sparks imagination. 
                    Writing allows me to connect with people, educate, and inspire in ways code alone cannot.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {writings.map((w) => (
                        <div
                            key={w.title}
                            className={`rounded-xl border shadow-md p-6 hover:shadow-lg transition`}
                        >
                            <h3 className={`text-lg font-semibold text-${w.color}`}>{w.title}</h3>
                            <p className="mt-3 text-sm text-white leading-relaxed">{w.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Writing;