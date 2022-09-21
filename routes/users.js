const express = require("express")
const router = express.Router()
const userModel =  require("../models/userModel")

router
.route("/")
.post((req, res) => {
        userModel.find({}, function(err, users) {
            res.render("userPage", {
                userList: users
            })
        })
})

router.route("/new").post((req, res) => {
    res.render("addUser")
})

router.route("/edit").post((req, res) => {
    res.send("You can edit a new user here")
})

router.route("/delete").post((req, res) => {
    res.send("User deleted")
})

module.exports = router