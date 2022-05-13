
const {createUser, login} = require("./userProfile.controller");
const router = require("express").Router();
//const {checkToken} =  require("../../auth/token");
//const router = require('express').Router();


//user profile routes
router.post("/login",login);
router.post("/newuser" ,createUser);




module.exports =router;

