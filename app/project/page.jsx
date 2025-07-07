import React from 'react'

const Project = () => {
  return (
    <div>
        <div className='text-center p-20'>
            <h1 className='text-4xl sm:text-3xl text-blue-950'>PROJECTS</h1>
            <p className='text-gray-600 mt-4'>Here are some of the projects I have worked on.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 sm:px-10 lg:px-24'>
            {/* Add your project cards here */}
        </div>
    </div>
  )
}

export default Project
