const express = require('express')
const router = express.Router();
const users = require('../connection')

router.get('/', (req, res) => {

    res.send({
        type: 'GET'
    })
})

router.post('/', (req, res) => {
    
    console.log(req.body)
    users.create(req.body)
    .then( (data) => {
        res.send(data)
    })
})

router.put('/:id', (req, res) => {
    res.send({
        type: 'PUT'
    })
})

router.delete('/:id', (req, res) => {
    res.send({
        type: 'DELETE'
    })
})

module.exports = router
