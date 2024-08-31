const express = require("express")
const cors = require("cors")
const db = require("./config/db")
require("dotenv").config()
const router = require("./routes/index")
const {app , server}  = require("./socket/index")
const cookiesParser = require('cookie-parser')

app.use( cors({
    origin : "https://chattrial-tawny.vercel.app" ,
    methods: ['GET', 'POST'], 
    credentials : true
}))
app.use(express.json())  
app.use(cookiesParser()) 

const port = process.env.PORT | 8080 ; 

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + port
    })
})
  
app.use("/api" , router)


db().then(() =>{
    server.listen(port , () => {
    console.log("the server is running on port : " + port) 
})})     