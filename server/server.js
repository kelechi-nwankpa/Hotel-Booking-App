import express from "express";
import { readdirSync } from 'fs';
import cors from 'cors';
import mongoose from "mongoose";
require("dotenv").config();
const morgan = require("morgan");

const app = express();


//db connection
mongoose.connect(process.env.DATABASE) //This returns a promise
// .then(() => console.log('DB Connected'))
// .catch((err) => console.log('DB not connected', err))

            //OR

mongoose.connection.on('connected', () => {
    console.log("Connected to the DB")
})

mongoose.connection.on('error', () => {
    console.log("Disconnected from the DB")
})

//middleware
app.use(cors())
app.use(morgan("dev"));


readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)))

const port = process.env.PORT|| 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
