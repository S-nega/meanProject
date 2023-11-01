
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const app = express()

const http = require("http");
const fs = require('fs').promises;

let userListFile;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes

//home page
app.get('/', (req, res) => {
    // res.send('Hello node api')
    fs.readFile(__dirname + `/src/app/app.component.html`)
            .then(contents => {
                res.writeHead(200);
                res.end(contents);
            })
})

//page for add user | registration page
app.get('/registration-form', async(req, res) => {
    try{
        fs.readFile(__dirname + `/src/app/components/registration-form/registration-form.component.html`)
            .then(contents => {
                res.writeHead(200);
                res.end(contents);
            })
    } catch (error){
        res.status(500).json({message: error.message})
    }
})


//get all users
app.get('/users', async(req, res) => {
    try{
        const users = await User.find({});
        // users = JSON.parse(users);
        // console.log(users);
        // res.status(200);

        // res.status(200).json(users);
        res.json(users); //get json at web page

        // res.end(`<html><body><h1>This is HTML</h1></body></html>`);
        // res.render('user-list', {users});

        // res.end(`user-list.component.html`);
        // res.send({users: users});

        // fs.redirect(__dirname + `/src/app/components/user-list/user-list.component.ts`)
        

        // fs.readFile(__dirname + `/src/app/components/user-list/user-list.component.html`)
        //     .then(contents => {
        //         res.writeHead(200);
        //         console.log(users);
        //         res.end(contents, users);
        //     })
    
        
    
    // if (users) {
    // //   this.registeredUsers = JSON.parse(storedUsers);

    //   const exUsersJson = localStorage.getItem('user');
    //   const exUsers = exUsersJson ? JSON.parse(exUsersJson) : [];
    //   exUsers.push(users);
    //   localStorage.setItem('user', JSON.stringify(exUsers));
    // }

    } catch (error){
        res.status(500).json({err_message: error.message})
    }
})

//get one user 
app.get('/users/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//create new user
app.post('/users', async(req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user);
    } catch (error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

//update user
app.put('/users/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete user
app.delete('/users/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json(user);
        
    } catch (error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect('mongodb+srv://admin:admin@cluster0.33bfzp0.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });    
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
    
})