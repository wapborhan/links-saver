const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const middlewares = [
    express.urlencoded({ extended: false }),
    express.json(),
    cors(),
    morgan('dev')
]

const applyMidleware = (app) =>{
    middlewares.map(m=>app.use(m))
}
module.exports = applyMidleware