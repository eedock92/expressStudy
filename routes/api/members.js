const express = require('express');
const router = express.Router();


// Gets All members
router.get('/api/members', (req, res) => {
    res.json(members);
   });
   
//Get single Member
router.get('/api/members/:id', (req, res) => {
       const found = members.some(member => member.id === parseInt(req.params.id));
   
       if(found) {
           res.json(members.filter(member => member.id === parseInt(req.params.id)));
       }else{
           res.status(400).json({msg : `No member with the id of ${req.params.id}`});
       }
   
   });