import express  from "express";
import cors from 'cors';
import dotevn from 'dotenv';
const env = dotevn.config()
const app= express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
app.listen(port,(req,res)=>{
    console.log(`sever esta corriendo en http://localhost:${port}/`)

})
// app.listen(8000,(req,res)=>{
//     console.log('sever esta corriendo en http://localhost:8000/')

// })