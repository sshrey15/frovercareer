import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import React from 'react'

const Jobsheader = () => {
  return (
    <>

        <section className='bg-gray-100 h-[50vh] block w-full p-40  items-center justify-center'>
        <h1 className="text-6xl font-bold -mt-10  ">Search Jobs at <span className='text-6xl text-purple-500'>Frover</span></h1>

  <div className="flex  items-center mt-4 bg-gray-100  justify-center">
    <Input className="w-[100vw] py-3 px-4 text-lg" type="email" placeholder="Search Jobs" />
    <Button className="py-3 px-4 text-lg h-16" type="submit">Search</Button>
  </div>
</section>
    </>
  )
}
  
export default Jobsheader