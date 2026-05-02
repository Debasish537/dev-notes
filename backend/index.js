const express = require('express');
const connectDB = require('./config/dbConnection');
const app=express();
const cors = require('cors');

app.use(cors()) //gives access for accessing the datas from backend by frontend

//Below 2 line used for handling the form data
app.use(express.json())
app.use(express.urlencoded({extended:true})) //used in postman for sending and receiving datas


connectDB();

//ROute Defines
app.get('/health',function(req,res){
    res.send('OK')
})

//Implementing same above OK feature but using 'use()' , router is imports here
app.use('/api/note',require('./routes/notes.routes')) //This func needs baseurl[View] and router or middle-ware function so the base url for routing  is /api/note and router is defined

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})

// M == Model -Data
//V == View - app.get('/health')
//C == Controller - function(req,res){res.send('OK')}
//config folder holder all connection building things