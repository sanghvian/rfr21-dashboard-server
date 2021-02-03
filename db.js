require('dotenv').config()
const { Pool, Client } = require('pg')
// console.log(process.env.DB_USERNAME);
// console.log(process.env.HOST);
// console.log(process.env.PORT);
// console.log(process.env.PASSWORD);
const pool = new Pool({
    user:process.env.DB_USERNAME,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
})

const client = new Client({
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  user:process.env.DB_USERNAME,
  password:process.env.PASSWORD,
  host:process.env.HOST,
})

module.exports.client = client
module.exports.pool = pool
