"use client"
import React, { useEffect, useState } from "react";

const page = () => {

  const [applicantInfo, setApplicantInfo] = useState({
    name: "",
    email: "",
    phone: "",
    skills: [],
    experience: [],
  })




  const handleInputChange = (event) => {
    
    
  };



  return (
    <>
      <div class="flex pt-0 flex-col w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg mx-auto p-20">
        <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
          Application Form
        </div>
        <div class="mt-8">
          <form>
            <div class="flex flex-col mb-2">
              <label class="mb-1 text-xs tracking-wide text-gray-600">
                Name:
              </label>
              <input
                class="py-2 px-3 text-grey-darkest"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="mb-1 text-xs tracking-wide text-gray-600">
                Email:
              </label>
              <input
                class="py-2 px-3 text-grey-darkest"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="mb-1 text-xs tracking-wide text-gray-600">
                Phone:
              </label>
              <input
                class="py-2 px-3 text-grey-darkest"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col mb-2">
      <label className="mb-1 text-xs tracking-wide text-gray-600">
        Skills:
      </label>
      <input
        list="skills"
        className="py-2 px-3 text-grey-darkest"
        type="text"
        name="skills"
        placeholder="Enter your skills"
        // value={skills}
        onChange={handleInputChange}
      />
      <datalist id="skills">
        <option value="JavaScript" />
        <option value="Python" />
        <option value="Java" />
        {/* Add more options as needed */}
      </datalist>
    </div>
            <div class="flex flex-col mb-2">
              <label class="mb-1 text-xs tracking-wide text-gray-600">
                Experience:
              </label>
              <input
                class="py-2 px-3 text-grey-darkest"
                type="text"
                name="experience"
                placeholder="Enter your experience"
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="mb-1 text-xs tracking-wide text-gray-600">
                Education:
              </label>
              <input
                class="py-2 px-3 text-grey-darkest"
                type="text"
                name="education"
                placeholder="Enter your education"
              />
            </div>
            <div class="flex flex-col mb-2">
              <label class="mb-1 text-xs tracking-wide text-gray-600">
                Resume:
              </label>
              <input
                class="py-2 px-3 text-grey-darkest"
                type="file"
                name="resume"
                accept=".pdf"
              />
            </div>
            <button class="w-full py-3 mt-6 text-white transition duration-500 ease-in-out transform bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
