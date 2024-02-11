"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { differenceInDays } from 'date-fns'
import Link from 'next/link'

const Jobcard = ({ job }) => {
    const daysAgo = differenceInDays(new Date(), new Date(job.postedAt))
   
    return (
        <Card className="mt-10 border-t-4 border-purple-500 ">
            <hr className='text-purple-500'/>
            <CardHeader  >
                <div className='flex gap-3 align-middle   '>
                    <div className='flex gap-10'>
                        <Link href={`/openings/${job.id}`}> 
                        <CardTitle className=" text-3xl font-bold hover:text-purple-500 cursor-pointer">{job.title}</CardTitle>
                        </Link>
                        {/* <button variant="outline" className="bg-gray-900 p-2  shadow-lg  ml-4 text-white ">Apply Now</button> */}


                    </div>

                </div>

            </CardHeader>
            <hr />
            <CardContent className="mt-2">

                <button variant="outline" className="mr-2 p-2 border border-solid border-1 border-gray-500 ">{job.qualifications}</button>
                <button variant="outline" className="mr-2 p-2 border border-solid border-1 border-gray-500">{job.skills.join(', ')}</button>
                <button variant="outline" className="mr-2 p-2 border border-solid border-1 border-gray-500">{job.requirements.join(', ')}</button>              {/* <p>{data}</p>
                 */}

                <CardDescription className="mt-3 cursor-pointer hover:text-blue-500">
                    {job.description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                <p>Posted  {daysAgo} days ago</p>
               
            </CardFooter>
        </Card>
    )
}

export default Jobcard