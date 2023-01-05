import express from "express";

const app = express();
const port = 3000;

const cb0 = (req,res,next)=>{
    console.log("I am in cb0");
    req.uname = "zoheballadin"
    next();
}

const cb1 = (req,res,next)=>{
    console.log("I am in cb1");
    req.pwd = "pass"
    next();
}
let arr = [cb0,cb1]

app.get("/", cb0,cb1,(req,res)=>{
    console.log(req.uname, req.pwd)
    res.send("middlewares")
})

app.get("/signin", arr, (req,res)=>{
    console.log(req.uname, req.pwd)
    res.send("array of middlewares")
})

app.listen(port, ()=>{
    console.log("Listening on port "+port)
})