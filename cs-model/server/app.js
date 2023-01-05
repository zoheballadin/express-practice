import express from "express";
import axios from "axios";
const app = express(); //instantiation
const port = 3000;

app.get("/zoheb", (req, res) => {
  res.send("Hello worl");
  console.log(res.headers);
});

// app.use("/",(req,res)=>{
//     res.send("coming from app.use")
// })

app.use(express.json()); //parses req.body to a JSON object, it applis to all routes
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("I am catering a POST request");
  console.log(req.headers["auth-token"]);
});

app.get("/query", (req, res) => {
  console.log(req.query);
  console.log(req.headers["user-agent"]);
  res.send("Sent");
});

app.get("/:user_id", async (req, res) => {
  //dynamic route
  // res.send("Valid response");
  console.log(req.params);
  try {
    let result = await axios.get(
      `https://api.github.com/users/${req.params.user_id}`
      
    )
    res.status(200).json(result.data);
  } catch (err) {
    console.error(err)
    res.status(500).json({error: "Internal Server Error"})
  }
  
});
app.get("/api/:user_id/all/:id", async (req, res) => {
  //dynamic route
  
  console.log(req.params);
  try {
    
    res.status(200).json({
        success: "Hello"
    });
  } catch (err) {
    console.error(err)
    res.status(500).json({error: "Internal Server Error"})
  }
  
});

app.get("/home", (req,res)=>{

})


app.listen(port, () => {
  console.log("Server started at : ", port);
});
