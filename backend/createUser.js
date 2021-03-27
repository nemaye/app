const users = require('./connection')

exports.createProfile = (req, res) => {
    users.create(req.body)
    .then( () => {
        console.log("successful")
        res.send(req.body)
    })
    .catch( (err) => {
        console.log('err', err)
        res.send('error')
    })
}

exports.checkProfile = (req, res) => {
    console.log(req.body.email)
    users.findOne({ email: req.body.email })
    .exec((err, user) => {
        if(user) {
            console.log('fafa')
            res.send(true)
        }
        else{
            console.log('err')
            res.send(false)
        }
    })
}