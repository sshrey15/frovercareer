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
        <Card className="mt-5 border p-0 sm:p-10 border-purple-500 ">
            <CardHeader>
                <div className='flex flex-col sm:flex-row gap-3 align-middle'>
                    <div className='flex flex-col sm:flex-row gap-10'>
                        <Link href={`/openings/${job.id}`}> 
                        <CardTitle className=" text-xl sm:text-3xl cursor-pointer">Description</CardTitle>
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <hr/>
            <CardContent className="mt-2">
                <CardDescription className="mt-3 cursor-pointer text-lg sm:text-xl font-normal ">
                    {job.description}
                </CardDescription>
            </CardContent>
            <hr />   
            <CardContent>
                <div className='flex flex-col sm:flex-row gap-3 mt-5 align-middle'>
                    <div className='flex flex-col sm:flex-row gap-10'>
                        <Link href={`/openings/${job.id}`}> 
                        <CardTitle className=" text-xl sm:text-3xl cursor-pointer">Qualifications & Skills</CardTitle>
                        </Link>
                    <hr/>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-5'>
                <CardDescription className="mt-5 cursor-pointer text-lg sm:text-xl font-normal ">
                 <button variant="outline" className="mr-2 p-2 border border-solid border-1 border-gray-500 ">{job.qualifications}</button>
                </CardDescription>
                
                <CardDescription className="mt-5 cursor-pointer text-lg sm:text-xl font-normal ">
                <button variant="outline" className="mr-2 p-2 border border-solid border-1 border-gray-500">{job.skills.join(', ')}</button>
                </CardDescription>
                </div>
            </CardContent>
            <hr/>
            <CardFooter >
                <p className='text-lg sm:text-xl mt-5 font-bold text-purple-400'>Posted  {daysAgo} days ago</p>
            </CardFooter>
        </Card>
    )
}

export default Jobcard