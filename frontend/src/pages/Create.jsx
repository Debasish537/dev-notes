import React from 'react'
import Navbar from '../components/Navbar'
import {useForm} from 'react-hook-form'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function Create() {

//Destructuring the useform()
  const {handleSubmit , register} = useForm();//handlesubmit() itself accepts a cllback function bcz itself unable to show details so to data to user it uses a callback function

  //react-router-dom gives useNavigate() to automatically redirectly after form submit
  let navigate = useNavigate();

  async function handleData(data){//the data coming from handleSubmit() which caputure data from register() 
    console.log(data);
    let res = await axios.post(`https://dev-notes-uz02.onrender.com/api/note`,data); //sending form data to database
    console.log(res);
    navigate('/');
  }

  return (
    <div className='bg-zinc-200 min-h-screen max-w-6xl mx-auto'>
        <Navbar/>
         
        <form onSubmit={handleSubmit(handleData)} action="" className='flex flex-col gap-4 w-lg mx-auto my-12'>
          <h1 className='tracking-tighter font-semibold text-xl'>Add a new Note</h1>
          <div className='flex flex-col gap-2'>
            <label htmlFor='title'>Title</label>

            {/* Accessing the i/p field's data by spread operator and the register('title') gives the name to the field  and later on used for accesing the data mean it will work like formData.titile during creating note in notescontroller used it in createnotes() */}
            <input {...register('title')} className='border border-zinc-700 px-4 py-2 rounded-xl text-sm' type="text" placeholder="Enter your Title" id='title'/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='content'>Content</label>

            {/* formData.content used in backend during creation of note similar to name property. and these fields are shows to user during object creation time in clg() */}
            <textarea {...register('content')} className='border border-zinc-700 px-4 py-2 rounded-xl text-sm' placeholder="Enter your Content" id='content'/>
          </div>

          <button className='bg-blue-500 px-4 py-2 text-white rounded-lg my-2 text-xs font-semibold w-fit'>Submit</button>
        </form>
    </div>

  )
}
 
export default Create