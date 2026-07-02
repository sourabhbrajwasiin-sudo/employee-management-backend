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

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

data()