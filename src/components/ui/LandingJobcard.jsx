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
// import { Button } from "@/components/ui/button"
import { differenceInDays } from 'date-fns'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
        <Link href={`/openings/${job.id}`}>
            <Card className=" mb-10 bg-[#fafafa] !border-0 rounded-xl shadow-none">
                <CardHeader className="border-none" >
                    <div className='flex justify-between gap-20 items-center   '>
                        <div className='flex gap-10 max-w-[30%] w-[30%] overflow-ellipsis'>
                            <div>
                                <p className='bg-[#EBE7F4] rounded-full w-fit text-sm py-1 px-5 mb-3 '>ENGINEERING</p>
                                <CardTitle className=" text-2xl font-semibold hover:text-purple-500 cursor-pointer">{job.title}</CardTitle>
                            </div>
                        </div>
                        {/*<div >
                            <button variant="outline" className="mr-2 m-1  p-2 border border-solid border-1 border-gray-500">{job.skills.join(', ')}</button>
                            <button variant="outline" className="mr-2 p-2 border border-solid border-1 border-gray-500">{job.requirements.join(', ')}</button>
                        </div>*/}
                        <div>
                            <p className='text-purple-500'>Experience</p>
                            <p className='text-2xl font-semibold mt-2'>2 Years</p>
                        </div>
                        <div>
                            <p className='text-purple-500'>Deadline</p>
                            <p className='text-2xl font-semibold mt-2'>2021-05-08</p>
                        </div>
                        {/*<div>
                            <p className='text-purple-500'>Skills</p>
                            <div className='flex gap-y-2 flex-wrap'>
                                {
                                    job.skills.map((skill, i)=>(
                                        <div className='bg-[#EBE7F4] rounded-full px-2 py-1 text-xs text-center'>
                                            {skill}
                                        </div>
                                    ))
                                }
                            </div>
                            </div>*/}
                        {/*<p className='flex-end'>Posted  {daysAgo} days ago</p>*/}
                        <button className='w-[10%]'> <ArrowRight className='ml-auto'/> </button>
                    </div>
                </CardHeader>
            </Card>
        </Link>
    )
}

export default Jobcard