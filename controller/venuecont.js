const {
    User,
    Administrator,
    FacultySpecialization,
    Faculty,
    Student,
    ProjectDomain,
    Rubric,
    Presentation,
    Venue,
    Panel,
    FYPGroup,
    PresentationSchedule,
    Evaluation,
    PresentationEvaluation
} = require("../models/fyp-models");

const mongoose = require("mongoose");
const express = require("express");
async function getAll (req, res)  {
    const venue = await Venue.find({})
    res.status(200).json(venue)
}


async function postResource(req, res){
    const {venueName, location} = req.body;

    try{
        const ven = await Venue.create({venueName, location})
        res.status(200).json(ven)

    }catch(err){
        res.status(400).json({msg:err.message})
    }
}


// get a single resource
async function getSingle (req, res) {
  
    const { id } = req.params;
   
    // checking the id's validity

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json(
            {
                msg: "ID not valid "
            }
        )
    }
    const singleSession = await User.findById(id);

    if (!singleSession){

       return res.status(404).json(
            {
                error:'error 404'
            }
        )
    }

    res.status(200).json(singleSession);
}


// update single
async function updateSingle (req, res){
    // grab the id 
    const {id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "404! Invalid ID!"});
    }

    // grabbing the properties
    const {name, email, password, role} = req.body;

    // updating the session if the id is valid
    const updatedSession = await User.findOneAndUpdate({_id:id},
        {
            ...req.body


        })
    if(!updatedSession){
        res.status(404).json({msg: "The session does not exist"});
    }

    res.status(200).json(updatedSession);
}

async function deleteSingle(req, res){
    

    const {id } = req.params;


    // checking to see if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "404! Invalid ID"});
    }

    
     const deletedUser = await User.findOneAndDelete({_id:id});

     if(!deletedUser){
            return res.json({msg: "The session has been deleted"})
        }

   res.json(deletedUser);
    
}

module.exports = {

    getAll,
    postResource,
    updateSingle,
    getSingle,
    deleteSingle
}