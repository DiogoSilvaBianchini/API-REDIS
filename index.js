require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const router = require("./src/router/router")
const {conn} = require("./src/config/redis")
conn()
const app = express()
const PORT = process.env.PORT

app.use(morgan("dev"))
app.use(router)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))