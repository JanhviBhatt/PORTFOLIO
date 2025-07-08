import React from 'react'
import { Home, User, Folder, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const items = [
        { name: 'Home', href: '/', icon: 'Home' },
        { name: 'About', href: '/about', icon: 'User' },
        { name: 'Projects', href: '/project', icon: 'Folder' },
        { name: 'Contact', href: '/contact', icon: 'Mail' }
    ];
    const isHomePage = usePathname() === '/';
    return (
        <div  className='flex top-0 left-0 right-0 z-50 text-blue-950 bg-white flex-row sticky'>
            {
                items.map((item) => {
                    return (
                        <a key={item.name} href={item.href} className="sm:mx-6 mx-2 my-1 text-lg font-semibold cursor-pointer hover:text-blue-900 hover:bg-gray-300 transition-colors duration-300 p-1 rounded-lg flex items-center">
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
