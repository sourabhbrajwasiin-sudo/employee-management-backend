const express = require("express")
const server = express()
require("./db/connection")
const products = require("./model/usermodel")
const data = require("./default/default")
const cors = require("cors")

server.use(cors())
server.use(express.json())

server.get('/',(req,res)=>{
    res.send("home page")
})

server.get("/getProducts",async(req,res)=>{
    try{
        const data = await products.find({})
        res.json(data)
    }
    catch(error){
        res.json(error)
    }
})

server.listen(9000,()=>{
    console.log("server running at : http://localhost:9000")
})

data()