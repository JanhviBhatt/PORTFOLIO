import React from 'react'
import { Home, User, Folder, Mail } from 'lucide-react';

const Navbar = () => {
    const items = [
        { name: 'Home', href: '/', icon: 'Home' },
        { name: 'About', href: '/about', icon: 'User' },
        { name: 'Projects', href: '/projects', icon: 'Folder' },
        { name: 'Contact', href: '/contact', icon: 'Mail' }
    ];
    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
        }} className='flex px-40 p-2 sticky top-0 left-0 right-0 z-50 text-blue-950'>
            {
                items.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a key={item.name} href={item.href} className="mx-4 text-lg font-semibold hover:text-blue-900">
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>

                    </a>
                    )
                })
            }
        </div>
    )
}

export default Navbar
