import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-6xl mx-auto tracking-tighter py-4 flex items-center justify-between'>
        <h1 className='font-semibold text-xl'>Code With Debasish</h1>
        <div className='flex gap-6'>
            <Link to={'/'}>Home</Link>
            <Link to={'/create'}>Add a Note</Link>
        </div>
    </div>
  )
}  

export default Navbar