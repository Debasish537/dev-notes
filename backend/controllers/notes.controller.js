const Notes = require("../models/Notes");

module.exports.getAllNotes = async function (req, res) {
    // res.send('Notes');

    //Checking the notes is push to DB or not by creating/using the api
    let allNotes = await Notes.find()
    res.status(200).json({
        message: "All Notes fetched Successfully",
        notes: allNotes
    })
}

module.exports.getNotesById = async function(req,res) {
    let id = req.params.id; //receive id from url send by the router(router gets id from frontend ) and params.id == router.get('/:id' ) router's id same variable name
    let fetchedNote =  await Notes.findById(id);
    res.status(200).json({
        message:"Note Fetched Successfully",
        note:fetchedNote
    })
}

module.exports.createNote = async function (req, res) { //Dealing with DB but DB in not the part of js that's why use async here
    const formData = req.body;//receives data from body via postman's Body

    let createdNote = await Notes.create({ //save the created note here with the variable
        title: formData.title,
        content: formData.content
    }) // await bcz this the line which takes time to execute

    // res.send(formData);

    res.status(201).json({
        message: "Note Created Successfully",
        note: createdNote
    })
}


module.exports.editNotes = async function (req, res) {
    const id = req.params.id;
    const updatedData = req.body; //receiving new  forms data  values for updating

    let fullyupdatednote = await Notes.findByIdAndUpdate(id, updatedData, { new: true });//Realing Updated Data to User in Real-time by using the 3rd parameter of the function

    res.status(200).json({
        message: "Note Updated Successfully",
        note: fullyupdatednote
    })
}

module.exports.deleteNote = async function (req,res) {
    let id = req.params.id;
    let deletedNote = await Notes.findByIdAndDelete(id);

    res.status(200).json({
        message:"NOte Deleted SUccessfully",
        note:deletedNote
    })
}

