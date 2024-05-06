const express = require("express")
const router = express.Router()
const User = require("../model/User")

router.get("/register", (req, res) => {
    res.render("signup")
})

router.post("/register", async(req, res) => {
    let { username, email, password } = req.body;
    let user = new User({ username, email })
    console.log(user);
    let newUSer = await User.register({ user, password})
    res.send(newUSer)
})

module.exports = router