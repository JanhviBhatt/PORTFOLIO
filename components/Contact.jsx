'use client'
import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    }
    const handleChange = (e) => {
        // Handle input changes if needed
        const {name,value}= e.target;
        setFormData(prev=>({...prev,[name]:value}))
        console.log(e.target.value);
    }
  return (
    <div className='mt-20 p-20 'data-aos="fade-up">
      <h1 className='flex justify-center align-center text-4xl sm:text-3xl text-blue-950'>CONTACT FORM</h1>
        <form className="flex flex-col items-center justify-center p-10 space-y-4" onSubmit={handleSubmit}>
            <input
            type="text"
            name ='name'
            value={formData.name}
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded w-full max-w-lg"
            onChange={handleChange}
            required
            />
            <input
            type="email"
            name='email'
            value={formData.email}
            placeholder="Your Email"
            required
            className="p-2 border border-gray-300 rounded w-full max-w-lg"
            onChange={handleChange}
            />
            <textarea
            name='message'
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded w-full max-w-lg h-32"
            ></textarea>
            <button
            type="submit"
            className="px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300"
            >
            Send Message
            </button>   
        </form>
    </div>
  )
}

export default Contact
