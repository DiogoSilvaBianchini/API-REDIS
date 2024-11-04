require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const router = require("./src/router/router")
const redisConn = require("./src/config/redis")

const app = express()
const PORT = process.env.PORT

app.use(morgan("dev"))
redisConn()
app.use(router)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))