import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Storeify from '../assets/images/project-1.png';
import DeeplordConsults from '../assets/images/project-2.png';
import Bookie from '../assets/images/bookie.png';
import Newkindred from '../assets/images/project-4.png';
import PonkeGold from '../assets/images/project-5.png';
import ViddaCollection from '../assets/images/project-6.png';
import { Link } from 'react-router-dom';

const ProjectsData = [
    {
        id: 1,
        name: "Storeify",
        desc: "Storeify is an agency that helps businesses create and manage their online stores.",
        image: Storeify,
        link: "https://storeify-delta.vercel.app/   "
    },
    {
        id: 2,
        name: "Deeplord Consults",
        desc: "Deeplord is a real estate web application that helps users find and purchase properties.",
        image: DeeplordConsults,
        link: "http://deeplordconsults.vercel.app/"
    },
    {
        id: 3,
        name: "Bookie",
        desc: "Bookie is an event management and ticket booking website, that allows users to create an event and share it with others.",
        image: Bookie,
        link: "http://bookie-six.vercel.app/"
    },
    {
        id: 4,
        name: "NewKindred",
        desc: "NewKindred is an agency web application that helps businesses create and manage their online presence.",
        image: Newkindred,
        link: "https://newkindred.com/"
    },
    {
        id: 5,
        name: "Vidda Collection",
        desc: "Vidda Collection is an e-commerce site that sells unique and exclusive products.",
        image: ViddaCollection,
        link: "https://vidda-collection.vercel.app/"
    },
    {
        id: 6,
        name: "PonkeGold",
        desc: "PonkeGold is a meme platform that allows users to create and download memes.",
        image: PonkeGold,
        link: "http://meme-generator.ponkegold.fun/#/meme-generator"
    },
];

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [loading, setLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    const handleLoadMore = () => {
        if (visibleProjects >= ProjectsData.length) return;
        
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (visibleProjects + 3 >= ProjectsData.length) {
                setVisibleProjects(ProjectsData.length);
                setAllLoaded(true);
            } else {
                setVisibleProjects(visibleProjects + 3);
            }
        }, 2000);
    };

    return (
        <div className="bg-[#1a1a1a] text-center py-20 sm:py-40 px-5 sm:px-10 lg:px-40">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">PROJECTS</h2>
            <p className="mb-10 text-gray-400 text-sm sm:text-base">Here are some of the projects I've worked on recently</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ProjectsData.slice(0, visibleProjects).map((project) => (
                    <div 
                        key={project.id} 
                        className="rounded-xl sm:rounded-3xl overflow-hidden shadow-lg bg-[#333] hover:scale-105 transition-transform duration-300"
                    >
                        <div className='relative'>
                            <img 
                                src={project.image} 
                                alt={project.name} 
                                className="w-full h-52 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm px-4 text-center">{project.desc}</p>
                            </div>
                        </div>
                        <Link to={project.link}>
                            <div className="w-full bg-[#2a2a2a] bg-opacity-80 text-white text-left p-4 flex items-center justify-between">
                                <div className="flex flex-col text-white">
                                    <p>Click here to visit</p>
                                    <p className="text-xl font-bold">{project.name}</p>
                                </div>
                                <FiArrowUpRight className="text-xl cursor-pointer" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {!allLoaded && (
                <button
                    onClick={handleLoadMore}
                    className="border-2 border-primary text-white bg-primary mt-10 px-10 py-3 rounded-lg hover:bg-[#00acb5a2] transition-all ease duration-300"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Load More"}
                </button>
            )}

            {/* {allLoaded && (
                <p className="text-gray-400 mt-4">No More Projects</p>
            )} */}
        </div>
    );
};

export default Projects;