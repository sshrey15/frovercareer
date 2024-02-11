import React from 'react'

const SingleHeader = ({job}) => {
  return (
    <>
        <section className='bg-gray-100 bg-opacity-50'>
            <h1 className='text-4xl text-purple-700'>{job.title}</h1>
        </section>


    </>
  )
}

export default SingleHeader