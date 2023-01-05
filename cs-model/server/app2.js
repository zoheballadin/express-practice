import express from "express";

const app = express();

const port = 6001;

app.get("/", (req,res)=>{
    res.send("Getting response: ")
})

const cb0 = (req,res,next)=>{
    console.log("I am in Callback 1");
    req.uname = "Zoheb"
    next();
}

//create a route , dynamic route at home

app.get("/test", cb0,(req,res)=>{
    console.log("Do something");
    console.log(req.uname)
    res.send("Check req object")

})

app.get("/hello", (req,res)=>{
    res.send("Hello")

})

app.listen(port, ()=>{
    console.log("LISTEINING ON ",port)
})