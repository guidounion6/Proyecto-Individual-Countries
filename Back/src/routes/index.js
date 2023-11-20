const express = require('express')
const morgan = require('morgan')
const router = require('express').Router();


router.use(morgan('dev'))
router.use(express.json())

// router.use('/users', userRouter)
// router.use('/posts', postsRouter)

module.exports = router; 