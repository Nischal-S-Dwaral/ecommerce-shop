const router = require('express').Router();
const User = require('../models/user');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials' })
        }
        const validPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
        if (validPassword!== req.body.password) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }
        const { password, ...others } = user._doc;

        //JWT Authentication
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC, { expiresIn: "3d"})

        res.status(200).json({...others, accessToken})
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;