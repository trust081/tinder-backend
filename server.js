import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.PORT || 8001;

//Middlewears

//DB config

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello trust"));
//Listener
app.listen(port, () => console.log(`listening on localhost: ${ port }`))