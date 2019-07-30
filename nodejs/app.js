var express = require('express');
var app = express();

app.get("/", (req,res)=>{
    res.send("hello world!");
});

app.post("/movies",(req,res)=>{
    res.send(req.body);
});

app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
});