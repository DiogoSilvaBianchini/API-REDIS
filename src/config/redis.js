const {createClient} = require("redis")

const client = createClient()

const conn = () => {
    client.connect()
    client.ping()
}

console.log("Redis conectado.")

module.exports = {client, conn}