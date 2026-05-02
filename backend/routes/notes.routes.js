const express = require('express');
const { getAllNotes, createNote, editNotes, deleteNote, getNotesById } = require('../controllers/notes.controller');
const router = express.Router()



//Creating 4 CRUD API's Below
router.get('/',getAllNotes)//getAllNotes is a controller's function

// router.get('/all-notes',function(req,res){
//     res.send('All Notes By Debasish');
// })

router.get('/:id',getNotesById)//id for dynamic routing 
router.post('/',createNote);
router.put('/:id',editNotes); //id receives from frontend via  params
router.delete('/:id',deleteNote);

module.exports = router;

//NOTE:- :id mean is that this id is used for dynamic routing purpose.