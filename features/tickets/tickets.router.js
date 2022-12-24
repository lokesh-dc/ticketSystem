
const express = require("express");
const ticketModel = require("./tickets.schema");

const app = express.Router();


app.get("/", async (req, res)=>{
    const {createdby} = req.headers;
    console.log(req.headers)
    console.log(createdby)
    try{
        let tickets = await ticketModel.find({createdBy: createdby}).populate("createdBy");
        res.send(tickets);
    }catch(e){
        res.send(e.message);
    }
})

app.post("/", async (req,res)=>{
    let {createdBy, title, category, message} = req.body;
    const date = Date.now();
    try{    
        await ticketModel.create({createdBy, title, message, category, date});
        res.send({status: true, message: "Ticket created Successfully."})
    }catch(e){  
        res.send(e.message)
    }
})

module.exports = app;