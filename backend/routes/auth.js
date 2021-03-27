const express = require('express');
const { createProfile, checkProfile } = require('../createUser');
const router = express.Router();

// router.get('/', (req, res) => {

//     res.send({
//         type: 'GET'
//     })
// })

router.post('/createProfile', createProfile )

router.post('/checkProfile', checkProfile)

// router.delete('/:id', (req, res) => {
//     res.send({
//         type: 'DELETE'
//     })
// })

module.exports = router
