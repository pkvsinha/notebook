var express = require('express');
var router = express.Router();

router.use( function timeLog(req,res,next) {
    console.log("Time: ", Date.now());
    next();
});

router.post("/", function(req,res) {
    res.redirect("/public/home.html");
});

module.exports = router;