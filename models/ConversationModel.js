// const mongoose = require("mongoose")

// const conversationModel = new mongoose.Schema({
//     sender : {
//         type : mongoose.Types.ObjectId , 
//         ref : "User" , 
//         required : true
//     } , 
//     reciever : {
//         type : mongoose.Types.ObjectId , 
//         ref : "User" , 
//         required : true
//     } , 
//     messages : {
//         type : mongoose.Types.ObjectId , 
//         ref : "Messages"
//     }
// } , 
// {
//     timestamps : true
// })

// const messageModel = new mongoose.Schema({
//     text : {
//         type : String , 
//         default : ""
//     } , 
//     imageUrl : {
//         type : String , 
//         default : ""
//     } , 
//     videoUrl : {
//         type : String , 
//         default : ""
//     } , 
//     seen : {
//         type : Boolean , 
//         default : false
//     } ,
//     msgByUserId : {
//         type : mongoose.Schema.ObjectId,
       
//         ref : 'User'
//     } 
// } , 
// {
//     timestamps : true
// })

// const MessageModel = mongoose.model("Messages" , messageModel)
// const ConversationModel = mongoose.model("Conversation" , conversationModel)

// module.exports = {
//     MessageModel , 
//     ConversationModel
// }

const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    text : {
        type : String,
        default : ""
    },
    imageUrl : {
        type : String,
        default : ""
    },
    videoUrl : {
        type : String,
        default : ""
    },
    seen : {
        type : Boolean,
        default : false
    },
    msgByUserId : {
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'User'
    }
},{
    timestamps : true
})

const conversationSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'User'
    },
    receiver : {
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'User'
    },
    messages : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'Message'
        }
    ]
},{
    timestamps : true
})

const MessageModel = mongoose.model('Message',messageSchema)
const ConversationModel = mongoose.model('Conversation',conversationSchema)

module.exports = {
    MessageModel,
    ConversationModel
}