import React from 'react'

const Contact = () => {
  return (
    <div className='mt-20 p-20'>
      <h1 className='flex justify-center align-center text-4xl sm:text-3xl text-blue-950'>CONTACT FORM</h1>
        <form className="flex flex-col items-center justify-center p-10 space-y-4">
            <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded w-full max-w-lg"
            />
            <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded w-full max-w-lg"
            />
            <textarea
            placeholder="Your Message"
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
