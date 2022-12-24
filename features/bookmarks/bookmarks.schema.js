const mongoose = require("mongoose");


let bookmarkSchema = new mongoose.Schema({
    createdBy : {type: mongoose.Schema.Types.ObjectId, ref:"user"},
    ticketId : {type: mongoose.Schema.Types.ObjectId, ref:"ticket"},
})

let bookmarkModel = mongoose.model("bookmark", bookmarkSchema);

module.exports = bookmarkModel;