"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { differenceInDays } from 'date-fns'

const Jobcard = ({ job }) => {
    const daysAgo = differenceInDays(new Date(), new Date(job.postedAt))
    return (
        <Card className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <CardHeader>
                <div className='flex flex-col md:flex-row gap-3 items-center'>
                    <div className='flex gap-10'>
                        <CardTitle className=" text-3xl md:text-4xl font-bold hover:text-purple-500 cursor-pointer">{job.title}</CardTitle>
                        <button variant="outline" className="bg-gray-900 p-2 shadow-lg ml-4 text-white ">Apply Now</button>
                    </div>
                </div>
            </CardHeader>
            <hr />
            <CardContent className="mt-2">
                <button variant="outline hidden md:block mr-2 p-2 border border-solid border-1 border-gray-500">{job.qualifications}</button>
                <button variant="outline" className="mr-2 p-2 border border-solid border-1 border-gray-500">{job.skills.join(', ')}</button>
                <CardDescription className="mt-3 cursor-pointer hover:text-blue-500">
                    {job.description}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row justify-between items-center">
                <p>Posted {daysAgo} days ago</p>
            </CardFooter>
        </Card>
    )
}

export default Jobcard