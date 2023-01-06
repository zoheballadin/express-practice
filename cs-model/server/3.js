import express from "express";

const app = express();

const port = 3000;

const cb0 = (req, res, next) => {
  console.log("THIS IS CALLBACK 0");
  req.username = "ZOHEB"; //changing request properties
  req.query.username = "quayyum";
  next(); //built in function for going to next middleware
};
const cb1 = (req, res, next) => {
  console.log("THIS IS CALLBACK 1");
  req.password = "PASS";
  console.log(req.query);
  next();


};

app.use(cb0,cb1);

app.get("/home", (req,res)=>{
    console.log(req.username);
    console.log(req.password);
    res.send("MIDDLEWARES")
})

app.listen(port, ()=>{
    console.log("LISTENING ON ",port)
})