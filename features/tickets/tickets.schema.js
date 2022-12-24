const mongoose = require("mongoose");


let ticketSchema = new mongoose.Schema({
    createdBy : {type: mongoose.Schema.Types.ObjectId, ref:"user"},
    category : {type: String},
    title : {type: String},
    message : {type: String},
    date : {type: String}
})

let ticketModel = mongoose.model("ticket", ticketSchema);

module.exports = ticketModel;