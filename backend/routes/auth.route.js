const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const auth = require("../middleware/jwt");

router.get("/", (req, res) => {
    res.status(201).json({
        message: "Welcome to the API.",
    });
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            console.log("No user found.");
            res.status(401).json({
                message: "Auth failed",
            });
        }

        if (!user.validPassword(req.body.password)) {
            req.flash("error", "Wrong password");
            res.status(401).json({
                message: "Auth failed",
            });
        }

        if (user) {
            console.log("logged in");
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id,
                },
                process.env.SECRET,
                {
                    expiresIn: "12h",
                }
            );

            return res.status(200).json({
                message: "Auth successful",
                token: token,
                uid: user._id,
            });
        }
    } catch (error) {
        console.log(err);
        return res.status(401).json({
            message: "Auth failed",
        });
    }
});

router.post("/register", async (req, res) => {
    try {
        const user = new User();

        user.email = req.body.email;
        user.password = user.encryptPassword(req.body.password);
        user.created_At = Date.now();

        user.save((error, result) => {
            if (error) {
                console.log(err);
                res.status(500).json({
                    message: "An error has occured.",
                });
            } else {
                res.status(201).json({
                    message: "User created.",
                });
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "An error has occured.",
        });
    }
});

router.get("/user/:uid", auth.checkToken, (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.uid });

        if (user) {
            return res.status(200).json({
                message: "user found",
                uid: user._id,
                email: user.email,
                joined: user.created_At,
            });
        }

        return res.status(401).json({
            message: "User does not exist.",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
});

module.exports = router;
