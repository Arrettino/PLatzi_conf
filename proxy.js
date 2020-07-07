const express = require("express");
const database = require("./database");
const bodyParser = require("body-parser")

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
    router.post("/badge",async (req,res,next)=>{
        const data = req.body
        let p = await database("write",data)
        res.send(p)
    })
}

module.exports = proxy