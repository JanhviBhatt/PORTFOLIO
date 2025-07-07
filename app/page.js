import Card from '@/components/Card'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Technical from '@/components/Technical'
import Contact  from '@/components/Contact'
import React from 'react'

const Home = () => {
  return (
    <div style={{ background: 'linear-gradient(90deg,rgba(49, 124, 153, 1) 0%, rgba(117, 172, 209, 1) 50%, rgba(133, 179, 210, 1) 58%, rgba(147, 186, 211, 1) 64%, rgba(158, 191, 212, 1) 70%, rgba(222, 221, 217, 1) 100%)', minHeight: '100vh' }}>
      <Header/>
      <Technical/>
      <Contact/>
    </div>
  )
}

export default Home
