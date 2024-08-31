const mongoose = require("mongoose")

async function db() {
    try { 
        await mongoose.connect(process.env.DATABASE_URL)

        const connection = mongoose.connection

        connection.on("connect" , () =>
            console.log("the data base has been connected ... ")
        )

        connection.on("error" , (error) =>
            console.log("there is an error : " + error)
        )
    } catch (error) {
        console.log("Something is wrong ",error)
    }
}

module.exports = db