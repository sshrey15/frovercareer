"use client";
import React, { useEffect, useState } from "react";
import SingleJobcard from "@/app/openings/components/SingleJobcard";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Calendar, Clock, MapPin, X } from "lucide-react";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Page = ({ params }) => {
  const [job, setJob] = useState(null); // Initialize job as null
  const id = params.id;

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
      <section className="grid grid-cols-12 gap-10 px-20 bg-[#fafafa] pt-14">
        <div className="col-span-8 min-h-screen ">
          <p className='bg-[#EBE7F4] rounded-full w-fit text-sm py-2 px-5'>
            JOB DESCRIPTION
          </p>
          <p className="text-5xl font-semibold mt-5">{job?.title}</p>
          <p className="mt-20 text-2xl font-semibold">Role Description</p>
          <p className="mt-2 text-lg">
            {job?.description}
          </p>

          <p className="mt-10 text-2xl font-semibold">Requirements</p>
          <ul className="mt-2 text-lg list-disc leading-10">
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
          </ul>

          <p className="mt-10 text-2xl font-semibold">Skills</p>
          <div className='mt-2 text-xl flex gap-2 flex-wrap'>
              {
                  job?.skills.map((skill, i)=>(
                      <div className='bg-[#EBE7F4] rounded-full px-4 py-1 text-sm text-center'>
                          {skill}
                      </div>
                  ))
              }
          </div>

          <p className="mt-10 text-2xl font-semibold">Qualifications</p>
          <p className="mt-2 text-lg">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
          </p>

          <hr className="mt-10 border-[#C285FF]"/>

          <p className="mt-10 text-2xl font-semibold">Our Application Process</p>
          <ul className="mt-2 mb-10 text-lg list-disc leading-10">
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
            <li className="ml-5">Vivamus semper magna suscipit leo malesuada, eu dictum velit varius.</li>
          </ul>
            
          <hr className="mb-10 border-[#C285FF]"/>
          <button variant="default" className="font-bold mb-10 py-2 px-5 text-lg bg-gradient-to-r from-[#5B21FF] from-20% rounded-full to-[#8C19FF]  hover:bg-purple-600 text-white " size="lg">Apply Now.</button>
        </div>
        <div className="col-span-4 sticky top-28 h-screen">
            <div className="bg-white rounded-2xl px-10 py-8">
              <button variant="default" className="font-bold mb-10 py-2 px-5 text-lg bg-gradient-to-r from-[#5B21FF] from-20% rounded-full to-[#8C19FF]  hover:bg-purple-600 text-white w-full">Apply Now.</button>
              <p className="font-bold text-xl mb-5">Job Summary</p>
              <div className="flex items-center gap-5 mb-5">
                <div>
                  <MapPin />
                </div>
                <div>
                  <p className="text-[#C285FF]">Location</p>
                  <p className="font-medium">Shouth Breeze Center,Banani11</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <div>
                  <Briefcase />
                </div>
                <div>
                  <p className="text-[#C285FF]">Job Type</p>
                  <p className="font-medium">Full Time</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <div>
                  <Calendar />
                </div>
                <div>
                  <p className="text-[#C285FF]">Date posted</p>
                  <p className="font-medium">posted 1 month ago</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <Clock />
                </div>
                <div>
                  <p className="text-[#C285FF]">Working Hours</p>
                  <p className="font-medium">9 AM - 6 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl px-10 py-8 mt-5">
              <p className="text-center">Share this on</p>
              <div className="flex items-center text-2xl gap-5 justify-center mt-2">
                <FaXTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
            <Link href="/openings" className="flex items-center justify-center gap-2 py-5 text-[#C285FF]">
              View All Job <ArrowUpRight />
            </Link>
        </div>
      </section>
      {/*<section className="bg-gray-100 h-[40vh] gap-10 p-6 sm:p-20 flex">
        <div>
        {job && <h1 className="text-6xl sm:text-7   xl hover:text-purple- font-bold">{job.title}</h1>}
        <Link href={`/application/${job ? encodeURIComponent(job.title) : ''}`}>
       <button className="bg-purple-500 text-white p-2  mt-5">Apply Now</button>
       </Link>
  </div>
       
      </section>

      {/*<section className=" p-5   sm:p-20 grid grid-cols-1 gap-4">
        {job && <SingleJobcard job={job} key={job.id} />}
</section>*/}
    </>
  );
};

export default Page;
