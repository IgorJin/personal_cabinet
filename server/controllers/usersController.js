const User = require('../models/User')
const config = require('../../etc/config.json')

exports.addUser = async function(req,res) {
    console.log(req.body);
    const user = new User({
        displayName: req.body.user.username,
        email: req.body.user.email,
        passwordHash: req.body.user.password,
    })
    await user.save()
    let token = await user.genrateToken();
    res.status(200).json({
        user,
        token
    })
}

exports.authUser = async function(req,res) {
    res.status(200).json(req.user)
}

exports.loginIn = async function(req,res) {   
    try {
        const {email, password} = req.body.user
        const user = await User.findByCredentials(email, password)
        if (!user) throw new Error('Dont find user')
        let token = await user.genrateToken();
        res.status(200).json({
            user,
            token
        })
    } catch (e) {
        res.status(400).send(e)
    }
    
}
exports.all = async function(req,res) {   
    let u = await User.findOne({ email: 'i.zubenko2012@yandex.ru'})
    res.status(200).json({ u})
}

// exports.reqBody = function(req,res) {   
//     console.log(req.body)
//     res.send('Hello')
// }

// exports.deleteTask = async function(req,res) {
//     await Todo.findById(req.params.id).remove()
//     res.send('deleted Task id='+ req.params.id)
// }

