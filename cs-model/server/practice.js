import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/home",(req,res)=>{
    res.send("HOME PAGE");
    console.log(req.headers.auth)
})

app.post("/signup", (req,res)=>{
    console.log(req.body.username, req.body.password)
    res.send("Sign up successful")
})

app.get("/query",(req,res)=>{
    console.log(req.query.uname, req.query.pwd)
    res.send("Receiving query params successfully");
})

app.get("/:userId",(req,res)=>{
    console.log(req.params.userId)     //contains the user id
    res.send("Receiving userId successfully")

})
app.get("/api/:userID/messages/:mid", (req,res)=>{
    console.log(req.params.userID)
    console.log(req.params.mid)
    res.send("Successfully receiving dynamic params")
})



app.listen(port, ()=>{
    console.log("Listening at port "+port)

})