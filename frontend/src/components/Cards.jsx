import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data}) { //prop drill and prop receiving from Home.jsx's Card with map(). {data} for obj destructuring without {} is will not work bcz the type of data is  Object.
  return (
    <div className='bg-white p-4 rounded-xl tracking-tighter'>
        <h1 className='text-lg font-semibold'>{data.title}</h1>
        {/* <button className='bg-blue-500 px-4 py-2 text-white rounded-lg my-2 text-xs font-semibold'>View Note</button> */}
        <Link to={`/note/${data._id}`} className='bg-blue-500 px-4 py-2 text-white rounded-lg my-3 text-xs font-semibold'>View Note</Link>

    </div>
  )
}

export default Cards