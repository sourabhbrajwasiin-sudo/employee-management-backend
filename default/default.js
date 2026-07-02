const products = require("../model/usermodel.js")

const Data = require("../data.js")


const data = async () => {

    await products.deleteMany({})

    await products.insertMany(Data)



}

module.exports = data