import React from 'react'
import 'devicon/devicon.min.css';
import { Icon } from '@iconify/react';

const Card = () => {
    const items = [
        {
            title: 'Technologies I love to build with',
            description: 'I deeply enjoy solving problems through code — from crafting intuitive front-end interfaces to building robust back-end systems and the APIs that connect them. I thrive on challenges, and no project is ever too complex when curiosity and clean code lead the way.',
            tech: [
                [
                    { "name": "React", "icon": "devicon-react-original" },
                    { "name": "Node.js", "icon": "devicon-nodejs-plain" },
                    { "name": "Express", "icon": "devicon-express-original" },
                    { "name": "MongoDB", "icon": "devicon-mongodb-plain" },
                    { "name": "Tailwind CSS", "icon": "devicon-tailwindcss-plain" },
                    { "name": "Next.js", "icon": "devicon-nextjs-original" },
                    { "name": "JavaScript", "icon": "devicon-javascript-plain" },
                    { "name": "TypeScript", "icon": "devicon-typescript-plain" },
                    { "name": "Python", "icon": "devicon-python-plain" },
                    { "name": "CSS", "icon": "devicon-css3-plain" },
                    { "name": "HTML", "icon": "devicon-html5-plain" },
                    { "name": "Git", "icon": "devicon-git-plain" },
                    { "name": "GitHub", "icon": "devicon-github-original" },
                    { "name": "REST APIs", "icon": "heroicon-plug" },
                    { "name": "PostgreSQL", "icon": "devicon-postgresql-plain" },
                    { "name": "Bootstrap", "icon": "devicon-bootstrap-plain" }
                ]
            ]
        },
        {
            title: 'Software I love to work with',
            description: 'I have a strong, intuitive grasp of how world-class software interfaces are crafted. Over time, I’ve worked with a wide range of tools and technologies — here are just a few of the ones I’ve used extensively.',
            tech: [
                [
                    { "name": "Photoshop", "icon": "devicon-photoshop-plain" },
                    { "name": "Netlify", "icon": "simple-icons:netlify" },
                    { "name": "GitHub", "icon": "devicon-github-original" },
                    { "name": "Git", "icon": "devicon-git-plain" },
                    { "name": "VS Code", "icon": "devicon-vscode-plain" },
                    { "name": "Postman", "icon": "simple-icons:postman" },
                    { "name": "Vercel", "icon": "simple-icons:vercel" },
                ]
            ]
        },
        {
            title: "Connect With Me",
            description: "I'm always open to meaningful connections, collaborations, or just a good tech conversation. Feel free to reach out or follow me on any of the platforms below.",
            tech: [
                [
                    {
                        "name": "LinkedIn",
                        "icon": "simple-icons:linkedin",
                        "link": "https://www.linkedin.com/in/janhvi-bhatt-630082338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                    },
                    {
                        "name": "GitHub",
                        "icon": "devicon-github-original",
                        "link": "https://github.com/JanhviBhatt"
                    },
                    {
                        "name": "Twitter",
                        "icon": "simple-icons:twitter",
                        "link": "https://x.com/killuazolddcyk"
                    },
                    {
                        "name": "Instagram",
                        "icon": "simple-icons:instagram",
                        "link": "https://www.instagram.com/aamyra.ree/"
                    },
                    {
                        "name": "Email",
                        "icon": "heroicons:envelope",
                        "link": "mailto:janhvibhatt112@gmail.com"
                    },
                ]
            ]
        },
        {
            title: "My Coding Profiles",
            description: "These platforms reflect my problem-solving journey, algorithmic thinking, and dedication to consistent growth. Explore my profiles to see how I approach challenges across different domains.",
            tech: [
                [
                    {
                        "name": "LeetCode",
                        "icon": "simple-icons:leetcode",
                        "link": "https://leetcode.com/u/janhvi_bhatt123/"
                    },
                    {
                        "name": "GitHub",
                        "icon": "devicon-github-original",
                        "link": "https://github.com/JanhviBhatt"
                    },
                    {
                        "name": "GeeksforGeeks",
                        "icon": "simple-icons:geeksforgeeks",
                        "link": "https://auth.geeksforgeeks.org/user/janhvi_bhatt123/"
                    },
                    {
                        "name": "Codeforces",
                        "icon": "simple-icons:codeforces",
                        "link": "https://codeforces.com/profile/Janhvi.bhatt_"
                    },
                    {
                        "name": "HackerRank",
                        "icon": "simple-icons:hackerrank",
                        "link": "https://www.hackerrank.com/profile/janhvibhatt112"
                    },
                    {
                        "name": "Coding Ninjas",
                        "icon": "simple-icons:codingninjas",
                        "link": "https://www.naukri.com/code360/profile/janhviBhatt"
                    }
                ]
            ]
        }


    ]
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 sm:px-10 lg:px-24'>
                {
                    items.map((item, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 glass-card "data-aos="fade-up" >
                            <h2 className="text-3xl font-semibold mb-8 ">{item.title}</h2>
                            <p className="text-gray-300 mb-10">{item.description}</p>
                            <div className="flex flex-wrap gap-4">
                                {item.tech[0].map((tech, techIndex) => (
                                    <a
                                        key={techIndex}
                                        href={tech.link? tech.link : undefined}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 transition duration-300 rounded-lg px-4 py-2"
                                    >
                                        <button className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 transition duration-300 rounded-lg px-4 py-2">
                                                <i className={`${tech.icon} text-blue-500`}></i>
                                                <Icon icon={tech.icon} className="text-blue-500" width="24" height="24" />
                                                <span>{tech.name}</span>
                                        </button>
                                    </a>

                                        ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card
