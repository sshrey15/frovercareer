"use client"
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Jobsheader from './components/Jobsheader';
import Jobcard from './components/JobCard';
import MobileCard from './components/MobileCard'; // Import your mobile card component

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' }); // Change this to the breakpoint you want

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
      } catch(err) {
        console.log(err);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <>
       {!isSmallScreen && <Jobsheader/>}
      <section className='p-4 md:p-40 grid grid-cols-1 gap-4'>
        <h1 className='text-4xl font-bold'>Latest Jobs{
          jobs.length > 0 && ` (${jobs.length})`
        
        }</h1>
        {
          jobs.map((job) => (
            isSmallScreen ? <MobileCard job={job} key={job.id} /> : <Jobcard job={job} key={job.id} />
          ))
        }
      </section>
    </>
  );
};

export default Page;