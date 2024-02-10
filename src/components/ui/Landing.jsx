"use client"
import React, { useState, useEffect } from 'react';
// import  {Button}  from '@/components/ui/button';

const images = [
    '/bg4.png',
    '/bg5.jpg',
    '/bg6.jpeg',
    // add more image paths as needed
];

const CareerPage = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);

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
    }, []);
    return (
        <div className="font-sans text-gray-900 antialiased ">
            <section id="landing" className="h-[50vh] flex items-center justify-center text-center p-6 relative">
                <div className="absolute inset-0 bg-center bg-cover transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `url(${currentImage})`, opacity: 0.5 }}></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold mb-7 ">Start Your Career with <span className='text-6xl text-purple-500'>Frover</span></h1>
                <button variant="default" className="py-3 px-4 text-lg bg-purple-500 hover:bg-purple-600 text-white h-16" size="lg">Explore Jobs</button>
                            </div>
            </section>

            <section id="jobs" className="mb-6 p-10 bg-gray-100">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
                    <div className="md:w-1/2 text-center">
                        <h2 className="text-4xl font-bold mb-4">About <span className='text-purple-500'>Frover</span></h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                            vehicula tellus eu orci luctus, vel blandit lorem hendrerit.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Wide Range of Jobs</h3>
                            <p className="text-gray-700">
                                Explore a diverse range of job opportunities across industries.
                            </p>
                        </div>
                        <div className="bg-white p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Advanced Search</h3>
                            <p className="text-gray-700">
                                Effortlessly find the perfect job with our advanced search
                                features.
                            </p>
                        </div>
                        <div className="bg-white p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Career Guidance</h3>
                            <p className="text-gray-700">
                                Get valuable insights and guidance to boost your career growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="jobs" className="mb-6 p-10  ">
                <h2 className="text-4xl font-bold mb-2">Job Openings</h2>
                <p>List of job openings...</p>
            </section>
            <section id="culture" className="mb-6 flex p-10 bg-gray-100 flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center">
                <div className="w-full lg:w-1/2 ">
                    <h2 className="text-4xl font-bold mb-2">Our Culture</h2>
                    <p>
                        At Frover, our culture is a vibrant tapestry woven with diversity, collaboration, and passion. We celebrate each other successes, big or small, and foster an environment of continuous learning and growth. Integrity is at the core of everything we do, and we take pride in our transparency and honesty. Together, we embrace the power of micro-influencers, driving innovation and delivering exceptional results for our clients. Our commitment to giving back to the community and having fun along the way ensures that every day at Frover is fulfilling and rewarding.
                        Join us in shaping the future of influencer marketing with positivity, teamwork, and dedication.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
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
            </section>


        </div>
    );
};

export default CareerPage;