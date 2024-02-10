// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from 'react'

const Jobsheader = () => {
  return (
    <>

        <section className='bg-gray-100 h-[50vh] block w-full p-40  items-center justify-center'>
        <h1 className="text-6xl font-bold -mt-10  ">Search Jobs at <span className='text-6xl text-purple-500'>Frover</span></h1>

  <div className="flex  items-center mt-4 bg-gray-100  justify-center">
    <Input className="w-[100vw] py-3 px-4 text-lg" type="email" placeholder="Search Jobs" />
    <button className="py-3 px-4 text-lg text-white h-16 bg-gray-900" type="submit">Search</button>
  </div>
</section>
    </>
  )
}
  
export default Jobsheader