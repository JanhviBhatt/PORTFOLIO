import React from 'react'
import { Home, User, Folder, Mail } from 'lucide-react';

const Navbar = () => {
    const items = [
        { name: 'Home', href: '/home', icon: 'Home' },
        { name: 'About', href: '/about', icon: 'User' },
        { name: 'Projects', href: '/projects', icon: 'Folder' },
        { name: 'Contact', href: '/contact', icon: 'Mail' }
    ];
    return (
        <div  className='flex p-40 lg:px-30 lg:p-0 top-0 left-0 right-0 z-50 text-blue-950 bg-white flex-col lg:flex-row lg:h-auto lg:sticky'>
            {
                items.map((item) => {
                    return (
                        <a key={item.name} href={item.href} className="m-5 sm:mx-6 text-lg font-semibold hover:text-blue-900 hover:bg-gray-300 transition-colors duration-300 p-2 rounded-lg flex items-center">
                       <div className='flex'>
                         {
                            item.icon === 'Home' ? <Home className="inline mr-2" /> :
                            item.icon === 'User' ? <User className="inline mr-2" /> :
                            item.icon === 'Folder' ? <Folder className="inline mr-2" /> :
                            item.icon === 'Mail' ? <Mail className="inline mr-2" /> : null
                        }
                        <span>{item.name}</span>
                       </div>

                    </a>
                    )
                })
            }
        </div>
    )
}

export default Navbar
