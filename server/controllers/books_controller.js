const Book = require('../models').Book

function list (req, res) {
  Book.findAll().then(books => {
    res.send(books)
  })
}

function create (req,res) {
  Book.create({ title: '101 ways to eat a burger'}).then(book => {
    res.send(book)
  })
}
module.exports = {
  list,
  create
}
