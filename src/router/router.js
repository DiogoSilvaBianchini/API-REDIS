const router = require("express").Router()

router.get("/", (req,res) => res.status(200).json({msg: "Servidor rodando", status: 200}))

module.exports = router