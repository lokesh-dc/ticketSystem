
const express = require("express");
const bookmarkModel = require("./bookmarks.schema");

const app = express.Router();


app.get("/", async (req, res)=>{
    const {createdby} = req.headers;
    try{
        let tickets = await bookmarkModel.find({createdBy: createdby}).populate("createdBy").populate("ticketId");
        res.send(tickets);
    }catch(e){
        res.send(e.message);
    }
})

app.post("/", async (req,res)=>{
    let {createdBy, ticketId} = req.body;
    try{    
        await bookmarkModel.create({createdBy,ticketId });
        res.send({status: true, message: "Nookmark added Successfully."})
    }catch(e){  
        res.send(e.message)
    }
})

module.exports = app;