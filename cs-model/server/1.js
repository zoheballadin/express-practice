import express from "express";
import axios from "axios";

const app = express();

const port = 3000;

app.use(express.json()); //parses json data from any of the routes

app.get("/home", (req, res) => {
  console.log(req.headers.username);
  res.send("THIS IS HOME");
});

app.post("/signup", (req, res) => {
  console.log(req.body.username, req.body.password); //post request contains a body with username and password
  res.send("SIgnup successful");
});

app.get("/query", (req, res) => {
  console.log(req.query.name, req.query.id);
  res.send("receiving query");
});

app.get("/:userID/file/:prodID", async (req, res) => {
  try {
    let id = req.params.userID;
    let response = await axios.get(`https://api.github.com/users/${id}`);
    res.status(200)
    res.json(response.data)
    console.log(req.params)
  } catch (err) {
    res.status(500).json({error : ""})
  }
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
