const UserModel = require("../models/UserModel")
const jwt = require('jsonwebtoken')

async function registerUser(request,response){
    try {
        const { name, profilPic } = request.body

        const chackname = await UserModel.findOne({ name }) //{ name,email}  // null

        if(chackname){
            return response.status(400).json({
                message : "Already user exits",
                error : true,
            })
        }



        const user = new UserModel({
            name ,
            profilPic
        })
        const userSave = await user.save()

        const tokenData = {
            id : userSave._id,
        }

        const token = await jwt.sign(tokenData,process.env.JWT_SECREAT_KEY,{ expiresIn : '90d'}) 

        const cookieOptions = {
            http : true,
            secure : true
        }

        return response.cookie('token',token,cookieOptions).status(201).json({
            message : "User created and Login successfully",
            data : userSave,
            token ,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = registerUser