const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    title:String,
    content:String
},{
    timestamps:true //gives the note creation time of the particular note and gives 2 filed crateat and updated at

});


let Notes = mongoose.model('Notes',NotesSchema); //model name = Notes , data = NotesSchema

module.exports = Notes;