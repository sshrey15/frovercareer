"use client"
import React, { useState, useEffect } from 'react';
import Jobsheader from './components/Jobsheader';
import Jobcard from './components/JobCard';

const Page = () => {
  const [jobs, setJobs] = useState([]);

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
      <Jobsheader/>
      <section className='p-40 '>
        <h1 className='text-5xl font-bold'>Latest Jobs{
          jobs.length > 0 && ` (${jobs.length})`
        
        }</h1>
        {
          jobs.map((job) => (
            <Jobcard job={job} key={job.id} />
          ))
        }
      </section>
    </>
  );
};

export default Page;