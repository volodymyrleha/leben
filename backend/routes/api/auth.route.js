'use strict'

const express = require('express')
const router = express.Router()
const authController = require('../../controllers/auth.controller')

router.post('/register', authController.register) // validate and register
router.post('/login', authController.login) // login

module.exports = router
