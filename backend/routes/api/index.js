'use strict'
const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const taskRouter = require('./task.route')

router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter);
router.use('/task', taskRouter);
module.exports = router
