require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const Users = require('./model/user');
const subjectRouter = require('./routes/subjectRouter');

const app = express();

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

// Middlewares
app.use(cors({
    origin: [
        "https://crack-gen.vercel.app",
        "https://crack-gen-git-main-darkstarr.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", subjectRouter);

// Signup
app.post("/api/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return res.json({ msg: "User already exists!" });
        }

        await Users.create({
            name,
            email,
            password
        });

        res.json({
            msg: "Signup Successful!"
        });

    }

    catch (err) {

        res.status(500).json({
            msg: err.message
        });

    }

});

// Login
app.post("/api/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await Users.findOne({ email });

        if (!user) {
            return res.json({
                msg: "User not Found!"
            });
        }

        if (user.password !== password) {
            return res.json({
                msg: "Invalid Password!"
            });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            "secret"
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({
            msg: "Login Successful!"
        });

    }

    catch (err) {

        res.status(500).json({
            msg: err.message
        });

    }

});

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});