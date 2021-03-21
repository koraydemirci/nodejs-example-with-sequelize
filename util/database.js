// const mysql = require('mysql2')

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'q1w2e3r4t5',
//   database: 'node-complete'
// })

// module.exports = pool.promise()

const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'q1w2e3r4t5', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
