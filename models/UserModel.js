const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    name : {
        type : String , 
        require : [true , "the name is required"]
    } , 
    profilPic : {
        type : String , 
        default : ""
    }
} , {
    timestamps : true
})

const UserModel = mongoose.model("User" , userModel)

module.exports = UserModel