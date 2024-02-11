"use client"

import Link from 'next/link';
import LandingJobcard from './LandingJobcard';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
import MobileCard from '@/app/openings/components/MobileCard';


const images = [
    '/bg4.png',
    '/bg5.jpg',
    '/bg6.jpeg',
    // add more image paths as needed
];

const CareerPage = () => {
    const [jobs, setJobs] = useState([]);
    const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' }); // Change this to the breakpoint you want
    const [currentImage, setCurrentImage] = useState(images[0]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/jobs`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    setJobs(data);
                } else if (data.jobs && Array.isArray(data.jobs)) {
                    setJobs(data.jobs);
                } else {
                    console.error('Unexpected server response:', data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData(); // Call the fetchData function
    }, [
        // Add any dependencies here

    ]);


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((currentImage) => {
                const currentIndex = images.indexOf(currentImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 3000); // change image every 5000ms (5 seconds)

        return () => {
            clearInterval(timer);
        };
    }, [

    ]);
    return (
        <div className="font-sans text-gray-900 antialiased ">
            <section id="landing" className="h-[50vh] flex items-center justify-center text-center p-6 relative">
                <div className="absolute inset-0 bg-center bg-cover transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `url(${currentImage})`, opacity: 0.5 }}></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold mb-7 ">Start Your Career with <span className='text-6xl text-purple-500'>Frover</span></h1>
                    <Link href='/openings'>
                        <button variant="default" className="  px-4 text-lg bg-gradient-to-r from-[#5B21FF] from-20% rounded-full to-[#8C19FF]  hover:bg-purple-600 text-white h-12" size="lg">Search Jobs</button>
                    </Link>
                </div>

            </section>

            <section id="culture" className="mb-6 p-5  flex md:p-10 bg-gray-100 flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center">

                <div className="w-full m-5 lg:w-1/2">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/QQgXTLutn7s"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <button className='bg-[#D9D9D9] p-3 pl-4 pr-4  m-4'>ABOUT</button>
                    <h2 className="text-3xl font-bold m-4 text-[#5B21FF] mb-2">Who we are?</h2>
                    <p className='m-5'>
                        At Frover, our culture is a vibrant tapestry woven with diversity, collaboration, and passion. We celebrate each other successes, big or small, and foster an environment of continuous learning and growth. Integrity is at the core of everything we do, and we take pride in our transparency and honesty. Together, we embrace the power of micro-influencers, driving innovation and delivering exceptional results for our clients. Our commitment to giving back to the community and having fun along the way ensures that every day at Frover is fulfilling and rewarding.
                        Join us in shaping the future of influencer marketing with positivity, teamwork, and dedication.
                    </p>
                </div>
            </section>

            <section id="jobs" className="mb-6 md:p-10 p-5 ">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">

                    <div className="md:w-1/2 text-start m-5">
                        <button className='bg-[#D9D9D9] p-3 text-start m-3'>BENEFITS</button>
                        <h2 className="text-3xl text-[#5B21FF]  mb-4">Why you Should Join Our Awesome Team?</h2>
                        <p className="text-gray-700">
                            We want to feel like home when you are working at Frover Labs & for that we have curated a great set of benefits for you.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1  md:grid-cols-2 gap-8">
                        <div className="bg-white p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Team Work</h3>
                            <p className="text-gray-700">
                                Explore a diverse range of job opportunities across industries.
                            </p>
                        </div>
                        <div className="bg-white p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Work Remotely/In-office</h3>
                            <p className="text-gray-700">
                                Effortlessly find the perfect job with our advanced search
                                features.
                            </p>
                        </div>
                        <div className="bg-white p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Learning Opportunity</h3>
                            <p className="text-gray-700">
                                Get valuable insights and guidance to boost your career growth.
                            </p>
                        </div>
                        <div className="bg-white p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Upgrade Skills</h3>
                            <p className="text-gray-700">
                                Get valuable insights and guidance to boost your career growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="jobs" className="p-5 md:p-20 bg-[#D9D9D9] bg-opacity-50 ">
                <h2 className="text-2xl text-[#5B21FF] font-bold mb-2">Job Openings</h2>
                {
                    jobs.slice(0,3).map((job) => (
                        isSmallScreen ? <MobileCard job={job} key={job.id} /> : <LandingJobcard job={job} key={job.id} />
                    ))
                }
            </section>


        </div>
    );
};

export default CareerPage;