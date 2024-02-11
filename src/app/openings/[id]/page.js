"use client";
import React, { useEffect, useState } from "react";
import SingleJobcard from "@/app/openings/components/SingleJobcard";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }) => {
  const [job, setJob] = useState(null); // Initialize job as null
  const id = params.id;
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data.job);

        // Log data.title instead of job.title
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      fetchData(); // Call the fetchData function
    }
  }, [id]);

  return (
    <>
      <section className="bg-gray-100 h-[40vh] gap-10 p-6 sm:p-20 flex">
        <div>
        {job && <h1 className="text-6xl sm:text-7   xl hover:text-purple- font-bold">{job.title}</h1>}
        <Link href="/">
       <button className="bg-purple-500 text-white p-2  mt-5">Apply Now</button>
       </Link>
        </div>
       
      </section>

      <section className=" p-5   sm:p-20 grid grid-cols-1 gap-4">
        {job && <SingleJobcard job={job} key={job.id} />}
      </section>
    </>
  );
};

export default Page;
