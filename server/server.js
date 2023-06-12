import express from "express";
import cors from "cors";
import dotevn from "dotenv";
import stripe from "stripe";
import bodyParser from "body-parser";
import db from "./database/db.js";
import {
    tbPersona,
    tbUsuario,
    tbCarrito,
    tbCarritoDetalle,
    tbCategoriaProd,
    tbColorProd,
    tbDescuentoProd,
    tbDomicilio,
    tbGeneroProd,
    tbMarcaProd,
    tbPermisosUsers,
    tbProducto,
    tbTalleProd,
} from "./database/models.js";
import rutas from "./routes/routes.js";

const env = dotevn.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/stilos", rutas);
const port = process.env.PORT;
const Stripe = stripe(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/pagos", async (req, res) => {
    console.log(req.body.token);
    console.log(req.body.token.email);
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
        receipt_email: req.body.token.email,
    });
});
//     res.send('hello World!')
// })
// console.log('hello')

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (err) {
    console.error("Unable to connect to the database:", err);
}

app.listen(port, (req, res) => {
    console.log(`sever esta corriendo en http://localhost:${port}/`);
});
// app.listen(8000,(req,res)=>{
//     console.log('sever esta corriendo en http://localhost:8000/')

// })
