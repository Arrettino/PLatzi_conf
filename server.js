const http = require("http")
const express = require('express')
const app = express()
const server = http.createServer(app)
const path = require('path')
//dev 
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname,'client/build')))

app.get('/api/getList',(req,res)=>{
    var list = ["item1","item2","item3"]
    res.json(list)
    console.log('Sent list of items');
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 8080

app.listen(port, console.log(`Server is starting at ${port}`))