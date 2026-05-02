import React from 'react'
import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Edit() {



    //react-router-dom gives useNavigate() to automatically redirectly after form submit
    const navigate = useNavigate();
    const location = useLocation();

    //Destructuring the useform()
    const { handleSubmit, register } = useForm({
        defaultValues: {
            title: location.state.title,
            content: location.state.content
        }
    });//handlesubmit() itself accepts a cllback function bcz itself unable to show details so to data to user it uses a callback function


    // console.log(location)
    console.log(location.state);


    async function handleData(data) {//the data coming from handleSubmit() which caputure data from register() 
        console.log(data);
        let res = await axios.put(`https://dev-notes-uz02.onrender.com/api/note/${location.state._id}`, data); //sending form data to database
        console.log(res);
        navigate('/');
    }

    return (
        <div className='bg-zinc-200 min-h-screen max-w-6xl mx-auto'>
            <Navbar />
            <button className='bg-blue-500 px-4 py-2 rounded-lg my-6 block w-fit text-white cursor-pointer' onClick={() => navigate(-1)} >Back</button>

            <form onSubmit={handleSubmit(handleData)} action="" className='flex flex-col gap-4 w-lg mx-auto my-12'>
                <h1 className='tracking-tighter font-semibold text-xl'>Edit the Note</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='title'>Title</label>

                    {/* Accessing the i/p field's data by spread operator and the register('title') gives the name to the field  and later on used for accesing the data mean it will work like formData.titile during creating note in notescontroller used it in createnotes() */}
                    {/* <input {...register('title')} className='border border-zinc-700 px-4 py-2 rounded-xl text-sm' type="text" placeholder="Enter your Title" id='title' value={location.state.title}/> not allow to edit due to react-hook concept and the ...register get useless here so value field not used ,for solving this issue we pass defaultValue in useForm() */}
                    <input {...register('title')} className='border border-zinc-700 px-4 py-2 rounded-xl text-sm' type="text" placeholder="Enter your Title" id='title' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='content'>Content</label>

                    {/* formData.content used in backend during creation of note similar to name property. and these fields are shows to user during object creation time in clg() */}
                    <textarea {...register('content')} className='border border-zinc-700 px-4 py-2 rounded-xl text-sm' placeholder="Enter your Content" id='content' />
                </div>

                <button className='bg-blue-500 px-4 py-2 text-white rounded-lg my-2 text-xs font-semibold w-fit cursor-pointer'>Submit</button>
            </form>
        </div>

    )
}

export default Edit