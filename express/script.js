const express = require("express");
const app = express();

app.use((req,res)=>{
    res.send("Express is working")
})

app.listen(8080,()=>{
    console.log("Listening on port 8080")
})