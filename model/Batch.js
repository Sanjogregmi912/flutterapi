const mongoose =  require("mongoose")


const batctSchema =  mongoose.Schema({
    batchname  : {
        type : String,
        required : [true,"Batch name is required"]
    }
})

module.exports = mongoose.model("Batch",batctSchema)