const express = require("express")
const router = express.Router()
const {client} = require("../config/redis")

const getAllProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Produto1", "Produto2"])
        }, 5000)
    })
}

router.get("/", (req,res) => res.status(200).json({msg: "Servidor rodando", status: 200}))

router.get("/redis", async (req,res) => {
    const search = await client.get("products")
    let products;

    if(search){
        products = JSON.parse(search)
    }else{
        products = await getAllProducts()
        await client.set("products", JSON.stringify(products))
    }
    res.status(200).json({msg: "Salvo", results: products})
})

router.post("/redis", express.json(), async (req,res) => {
    const {name} = req.body
    await client.set("username", name)
    res.status(200).json({msg: "Salvo", results: name})
})
module.exports = router