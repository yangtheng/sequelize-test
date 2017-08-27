const Book = require('../models').Book

function list (req,res) {
  res.send("list fxn from booksController")
}

module.exports = {
  list
}
