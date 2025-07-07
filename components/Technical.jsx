import React from 'react'
import Card from './Card'
import Navbar from './Navbar'

const Technical = () => {
    return (
        <div className='bg-gray-800'>
            <Navbar />
            <div className="text-left px-10 lg:px-40 py-20 space-y-4">
                <h1 className="text-5xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                    Technical Skills
                </h1>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                   Here you’ll find a collection of technologies and tools that I’ve worked with across various projects — from frontend design to backend development and everything in between. These skills represent my hands-on experience and continued learning in the tech world.
                </p>
            </div>

            <Card />
        </div>
    )
}

export default Technical
