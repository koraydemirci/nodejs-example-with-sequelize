// const db = require('../util/database')

// const Cart = require('./cart')

// module.exports = class Product {
//   constructor (id, title, imageUrl, description, price) {
//     this.id = id
//     this.title = title
//     this.imageUrl = imageUrl
//     this.description = description
//     this.price = price
//   }

//   save () {
//     const { title, price, description, imageUrl } = this
//     return db.execute(
//       `INSERT INTO products
//                 (title, price, description, imageUrl)
//                 VALUES (?, ?, ?, ?)`,
//       [title, price, description, imageUrl]
//     )
//   }

//   static deleteById (id) {}

//   static fetchAll () {
//     return db.execute('SELECT * FROM products')
//   }

//   static findByPk (id) {
//     return db.execute(`SELECT * FROM products WHERE products.id = ?`, [id])
//   }
// }

const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Product
