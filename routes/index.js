const express = require('express')
// const registerUser = require('../controller/registerUser')
// const checkEmail = require('../controller/checkEmail')
// const checkPassword = require('../controller/checkPassword')
const userDetails = require("../controller/userdetails")
const logout = require('../controller/logout')
// const updateUserDetails = require('../controller/updateUserDetails')
// const searchUser = require('../controller/searchUser')
const registerUser = require("../controller/registeruser")
const updateUserDetails = require('../controller/updateuserdetails')
const searchUser = require('../controller/searchuser')

const router = express.Router()

//create user api
router.post('/register',registerUser)
// //check user email
// router.post('/email',checkEmail)
// //check user password
// router.post('/password',checkPassword)
// //login user details
router.get('/userdetails',userDetails)
// //logout user
router.get('/logout',logout)
// //update user details
router.post('/updateuser',updateUserDetails)
// //search user
router.post("/searchuser",searchUser)


module.exports = router