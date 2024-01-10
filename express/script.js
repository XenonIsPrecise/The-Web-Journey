const express = require("express");
const app = express();

// app.use((req,res)=>{
//     res.send("Express is working")
// })

app.listen(8080,()=>{
    console.log("Listening on port 8080")
})

app.get('/',(req,res)=>
{
    res.send("You are veiwing the Homepage")
})

app.get("/r/:anything/:ID",(req,res)=>{
    const {anything,ID} = req.params;
    res.send(`You are in the ${anything} page with ID of ${ID}.`)
})

app.get("/cats",(req,res)=>{
    res.send("You are on cats page")
})