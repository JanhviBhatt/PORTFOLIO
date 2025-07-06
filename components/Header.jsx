import React from 'react'
import { CircleUser, Download } from 'lucide-react';


const Header = () => {
  return (
    <div className="flex flex-col items-start justify-center h-screen text-white p-10 lg:p-40 space-y-4">
      <h1 className="text-5xl lg:text-6xl font-bold typing-text text-blue-950">
        JANHVI BHATT
      </h1>

      <p className="text-2xl mt-4 text-black">
        "Turning ideas into interactive, intelligent experiences—one line of code at a time."
      </p>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-800 ">
        I'm a passionate full-stack developer with a strong foundation in the MERN stack and a growing interest in AI, automation, and generative technologies. I love building impactful digital experiences—whether it's crafting responsive web apps, integrating real-world services, or exploring multi-agent AI systems. Always curious, always building.
      </p>

      <div className='flex justify-between w-full max-w-md mt-6'>
        <button className=" flex mt-6 px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300 "> <CircleUser /> Contact Me</button>
        <button className=" flex mt-6 px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300"> <Download />  Resume</button>
      </div>
    </div>
  )
}

export default Header
