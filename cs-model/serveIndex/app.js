import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 6001;
app.get("/",(req,res)=>{
    res.redirect("/public")
    // res.send("<h1>This is the root</h1>")
})

app.use("/public", serveIndex("public",{icons:true}), express.static("public"))
app.use("/home", express.static("public"))
app.listen(port, ()=>{
    console.log("Server started at por : ",port)
})