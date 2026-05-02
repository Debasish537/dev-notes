import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Note() {

    //Our code is unaware about the url with id so for solving this issue we use the useParams hook
    let params = useParams()
    let navigate = useNavigate()

    //We use useState to show the things to UI
    let [note, setNote] = useState(null);

    async function getNote() {
        let res = await axios.get(`http://localhost:3000/api/note/${params.id}`);//send id to api for hit the router then controler gives back the data as response
        console.log(res);
        setNote(res.data.note);
    }

    async function deleteNote() {
        let res = await axios.delete(`http://localhost:3000/api/note/${params.id}`);//send id to api for hit the router then controler gives back the data as response
        console.log(res);
        // setNote(res.data.note);
        navigate('/');
    }

    useEffect(function () {
        getNote();
    }, [])
    return note && ( // if note's value  present then show the page otherwise not show the page to user
        <div className='w-6xl mx-auto tracking-tighter'>
            <Navbar />
            <Link className='bg-blue-500 px-4 py-2 rounded-lg my-6 block w-fit text-white' to={'/'}>Back</Link>
            {/* <h1 >Notes Detail-{params.id}</h1>  the id ==<Route path='/note/:id' name */}
            <h1 className='text-4xl font-semibold tracking-tighter my-4'> The Title of Note is : {note.title}</h1>
            <p className='text-3xl'>The Content of Note is : {note.content}</p>

            <div className='flex items-center gap-4 my-5'>
                {/* <Link className='bg-orange-400 px-4 py-2 rounded-lg block w-fit text-white cursor-pointer' to={'/edit'}>Edit</Link> unable to pass data to edit page so that's why we button */}
                <button onClick={()=>navigate('/edit',{state:note})} className='bg-orange-400 px-4 py-2 rounded-lg block w-fit text-white cursor-pointer' to={'/edit'}>Edit</button>
                <button onClick={deleteNote} className='bg-red-500 px-4 py-2 text-white rounded-lg cursor-pointer'>Delete</button>
            </div>
        </div>
    )
}

export default Note