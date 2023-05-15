import express  from "express";
import cors from 'cors';
import dotevn from 'dotenv';
import stripe from 'stripe';
import bodyParser from "body-parser";

const env = dotevn.config()
const app= express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const Stripe = stripe(process.env.STRIPE_SECRET_KEY)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
 app.post('/pagos',async(req,res)=>{
    console.log(req.body.token)
    await Stripe.charges.create({
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'usd',
    });
 });
//     res.send('hello World!')
// })
// console.log('hello')

app.listen(port,(req,res)=>{
    console.log(`sever esta corriendo en http://localhost:${port}/`)

})
// app.listen(8000,(req,res)=>{
//     console.log('sever esta corriendo en http://localhost:8000/')

// })