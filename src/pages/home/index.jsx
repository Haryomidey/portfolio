import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";
import Writing from "./Writing";

const Home = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Writing />
            <Education />
            <Contact />
            <footer className="py-10 text-center text-xs text-gray-300">© {new Date().getFullYear()} Oladiipo Ayomide</footer>
        </main>
    );
};

export default Home;