import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Note from './pages/Note'
import Edit from './pages/Edit'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* here all Route defines the no. of pages we have */}
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit/>}/>

        {/* <Route path='/note/id' element={<Note/>}/> not work for dynaic routing */}
        {/*Work for dynaminc routing*/}
        <Route path='/note/:id' element={<Note/>}/>
        
      </Routes>
    </BrowserRouter>
  )  
}

export default App