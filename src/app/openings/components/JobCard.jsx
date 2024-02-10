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
import { Button } from "../../../components/ui/button"
import { differenceInDays } from 'date-fns'

const Jobcard = ({ job }) => {
    const daysAgo = differenceInDays(new Date(), new Date(job.postedAt))
    // const [isExpanded, setIsExpanded] = React.useState(false)

    // const [isBookmarked, setIsBookmarked] = React.useState(false)
    // const toggleDescription = () => {
    //     setIsExpanded(!isExpanded)
    // }
    // const truncatedDescription = job.description.substring(0, 95) + "..."
    // const changeicon = () => {
    //     setIsBookmarked(!isBookmarked)
    // }
    // const data = slowApi('', 1000)
    return (
        <Card className="mt-10">
            <CardHeader  >
                <div className='flex gap-3 align-middle   '>
                    <div className='flex gap-10'>
                        <CardTitle className=" text-3xl font-bold hover:text-purple-500 cursor-pointer">{job.title}</CardTitle>
                        <Button variant="outline" className="bg-gray-900  shadow-lg  ml-4 text-white ">Apply Now</Button>


                    </div>

                </div>

            </CardHeader>
            <hr />
            <CardContent className="mt-2">

                <Button variant="outline" className="mr-2 rounded-md">{job.qualifications}</Button>
                <Button variant="outline" className="mr-2 rounded-md">{job.skills.join(', ')}</Button>
                <Button variant="outline" className="mr-2 rounded-md">{job.requirements.join(', ')}</Button>              {/* <p>{data}</p>
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