const mongoose = require("mongoose")
const db = "mongodb://sou:12345@ac-kzptop4-shard-00-00.afij43g.mongodb.net:27017,ac-kzptop4-shard-00-01.afij43g.mongodb.net:27017,ac-kzptop4-shard-00-02.afij43g.mongodb.net:27017/?ssl=true&replicaSet=atlas-13fpkf-shard-0&authSource=admin&appName=Cluster0"


mongoose.connect(db,{

})
.then(()=>console.log("connection start"))
.catch(()=>console.log("failed"))