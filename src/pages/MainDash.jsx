import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'

const MainDash = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 flex flex-col rounded-lg-2xl'>
        <Header />
      </div>

  
    </div>
  )
}

export default MainDash