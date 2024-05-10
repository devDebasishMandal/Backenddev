// const express = require("express");

// creating the Server and making the folder as module to use ES6 .

import express from "express";

const app=express();


app.get("/",(req,res)=>{
res.send("Hi this is Backend dev day 1" );
});

app.listen(3000,()=>{
    console.log("server started on port 3000");
})