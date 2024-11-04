const {createClient} = require("redis")

const redisConn = async () => {
    const client = await createClient()
    await client.connect()
    await client.ping()
    console.log("Redis conectado.")
}

module.exports = redisConn