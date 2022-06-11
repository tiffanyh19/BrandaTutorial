const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a POST request at the URL /newShip/, to do this code.
 */
router.post("/newShip/", function(req, res){
  // look up documents in MongoDB by name.
  Ship.findOne({name: req.body.name}, function(error,doc){
    // if there was an error
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no document was found
    else if(!doc){
      //here I would make an if statement to check if the next ship model exists or not. I'm still new to 
      //vscode language so I wasn't quite sure how I'd program it but the if statement would come before making a new 
      //ship to prevent duplicates 


      // create a new instance of the Ship model, using the request body as the data.
      new Ship(req.body).save((err, doc) => {
        /**
         * this error/document fat-arrow function is required.
         * on an error, handle it. else send the newly created document back to the client.
         */

        if(err){
          console.error("Error saving new ship",err); //error saving the ship
          res.status(500).send(err);
        }
        else{
          res.send(doc);
        }
      });
    }
    // a document was found, return it instead.
    else{
      res.send(doc);
    }
  });
  Ship.getShip({name: req.body.name}, function(error,doc){
        const name = Ship.findOne();
        if (name == null){
          res.status(404).send(err);
        }
        else if (err){
          console.error("Error finding ship",err); 
          res.status(500).send(err)
        }
        else{
          res.send(name)
        }


  }

  Ship.getSpecificShip({name: req.body.name}, function(error,doc){
    const name = Ship.find();
    if (name == null){
      res.status(404).send(err);
    }
    else if (err){
      console.error("Error finding ship",err); 
      res.status(500).send(err)
    }
    else{
      //I believe here is where I'd distinguish the characteristics of boat features but I'm unsure how
      //When I looked at secondary battery in Ship.js it only mentioned string so I was unsure how to 
      //handle that but regardless some if statement would be placed here. 
      res.send(name)
    }


})

  Ship.findOneandUpdate({name: req.body.name}, function(error,doc){
  const name = Ship.find();
  const quality = req
  if (!name){
    res.status(404).send(err);
  }
  else if (name == null){
    res.status(400).send(err)
  }
  else if (err){
    console.error("Error finding ship to update",err);
    res.status(500).send(err)
  }
  else{
      name.express = req
  }


})




});

module.exports = router;