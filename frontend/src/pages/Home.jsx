import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import axios from "axios"
function Home() {

  const [notes,setNotes] =  useState(null);

  //Calling API For Getting all Notes
  async function getAllNotes(){ //It's not a part of frontend that's why async
    let res = await axios.get(`http://localhost:3000/api/note`);
    // console.log(res);
    // console.log(res.data);
    console.log(res.data.notes);
    setNotes(res.data.notes);
  }

  useEffect(function (){
    getAllNotes();
  },[]);

  return (
    <div className='bg-zinc-200 min-h-screen max-w-6xl mx-auto'>
        <Navbar/>
        <h1 className='my-4 text-3xl text-blue-600 font-bold tracking-tighter'>Notes</h1>
        <div className='grid grid-cols-3 gap-5'>
          {/* <Cards/>
          <Cards/>
          <Cards/> */} 

          { //conditaional rendering/looping for getting all notes
            notes && notes.map( function (note,index){
              return <Cards data={note}/>; //map() always return somethings
            }) 
          } 
        </div>
    </div>
  )
}  

export default Home