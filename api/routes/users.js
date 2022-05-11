import express from "express";
import User from '../models/User.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(404).json({message: "User not found."});
        (user.password !== req.body.password) && res.status(403).json({message: "Incorrect password."});

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

router.post('/register', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        username: req.body.username,
        password: req.body.password,
        description: req.body.description
    })

    try {
        const newUser = await user.save();
        const { password, ...other } = newUser._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


export default router;