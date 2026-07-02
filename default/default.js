const products = require("../model/usermodel.js")

const Data = require("../Data.Js")


const data = async () => {

    await products.deleteMany({})

    await products.insertMany(Data)



}

module.exports = data