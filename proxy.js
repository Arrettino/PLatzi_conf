const express = require("express");
const database = require("./database");

async function proxy(app){
    const router = express.Router();
    app.use("/proxy",router)

    router.get("/badges",async (req,res,next)=>{
        try{
            let data = await database("read")
            res.send(data)
        }catch(e){
            console.log(e)
        }
    })
    router.post("/badge",(req,res,next)=>{
        res.send("hola")
    })
}

module.exports = proxy