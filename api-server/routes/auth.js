const express = require("express");
const router = express.Router();
const passport = require("../passport/passport");

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    if(req.user){
      res.status(200).send({ authenticated : true, user: req.user.id });
      res.redirect("/characters");
    }else{
      res.status(401).send({ authenticated : false, user: null });
      //res.redirect("/signin?invalidUser=true")
    }

});

router.get('/current_user',
  (req, res) => {
    if(req.user){
        res.status(200).send({ id: req.user.id});
    }else{
        res.status(401).send({id: null});
    }

});

module.exports = router;
