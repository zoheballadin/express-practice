import express from "express";
import serveIndex from "serve-index";

const app = express();

const port = 3000;

app.use("/home", express.static("public"), (req,res)=>{
    res.send("PAGE NOT FOUND")
})
app.use("/public", serveIndex("public/",{icons:true}))


app.listen(port, ()=>{
    console.log("Listening on port",port)
})