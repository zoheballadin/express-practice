import express, { query } from "express";

const app = express();

const port = 3000;

app.use(express.json());        //parses json data from any of the routes

app.get("/home", (req,res)=>{
    console.log(req.headers.username)
    res.send("THIS IS HOME");
})

app.post("/signup", (req,res)=>{
    console.log(req.body.username, req.body.password)       //post request contains a body with username and password
    res.send("SIgnup successful")
})

app.get("/query", (req,res)=>{
    console.log(req.query.name, req.query.id)
    res.send("receiving query")
})

app.get("/:userID/test/:productID", (req,res)=>{
    console.log(req.params.userID, req.params.productID);
    res.send("DYNAMIC ROUTE WORKING");
})

app.listen(port, ()=>{
    console.log("Listening on port "+port)
})