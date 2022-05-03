const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user.model');
const { registerValidation, loginValidation } = require('./validation');

router.post('/signup', async (req, res) => {

    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const phoneNumberExist = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (phoneNumberExist) {
        return res.status(400).json({ message: 'Phone number already exists' });
    }

    const passwordMatch = req.body.password.localeCompare(req.body.confirmPassword);
    if (passwordMatch != 0) {
        return res.status(400).json({ message: `Passwords don't match` });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPasswd = await bcrypt.hash(req.body.password, salt);
    const hashConfirmPasswd = await bcrypt.hash(req.body.confirmPassword, salt);
    const hashPIN = await bcrypt.hash(req.body.pin, salt);


    let role = '';
    if (req.body.email === 'admin@gmail.com' && req.body.password === 'admin@123') {
        role = 'admin';
    } else {
        role = 'user';
    }

    const user = new User({
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        email: req.body.email.trim(),
        phoneNumber: req.body.phoneNumber.trim(),
        password: hashPasswd,
        confirmPassword: hashConfirmPasswd,
        pin: hashPIN,
        role: role
    });

    try {
        const savedUser = await user.save();
        const userName = savedUser.firstName.trim() + ' ' + savedUser.lastName.trim();
        res.status(200).json({
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                userName: userName,
                role: role
            }
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid Email/Password' });
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).json({ message: 'Invalid Email/Password' });
    }

    const authToken = jwt.sign({ _id: user._id }, process.env.AUTH_TOKEN);
    const userName = user.firstName.trim() + ' ' + user.lastName.trim();

    res.status(200).header('auth-token', authToken).json({
        data: {
            authToken: authToken,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: userName,
            role: user.role
        }
    });
});

router.put('/resetPassword', async (req, res) => {

    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (!user) {
        return res.status(400).json({ message: 'Phone number is not registered' });
    }

    const passwordMatch = req.body.password.localeCompare(req.body.confirmPassword);
    if (passwordMatch != 0) {
        return res.status(400).json({ message: `Passwords don't match` });
    }

    const prevPasswd = await bcrypt.compare(req.body.password, user.password);
    if (prevPasswd) {
        return res.status(400).json({ message: `Password shouldn't be a previous password` });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const hashConfirmPassword = await bcrypt.hash(req.body.confirmPassword, salt);

    const updatedPassword = await User.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { password: hashPassword, confirmPassword: hashConfirmPassword }, { new: true });

    return res.status(200).json({ message: 'Password reset successful' });
});


module.exports = router;