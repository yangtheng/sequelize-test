const express = require('express')
const router = express.Router()

const booksController = require('../controllers/books_controller')

router.get('/', booksController.list)
router.get('/create', booksController.create)

module.exports = router
