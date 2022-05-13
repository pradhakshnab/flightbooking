
const {createAdminProfile, getAdminByEmail, searchFlights, search} = require("./admin.controller");
const router = require("express").Router();
//const {checkToken} =  require("../../auth/token");
//const router = require('express').Router();


//admin profile routes
router.post("/admin/login",getAdminByEmail);
router.post("/newadmin" ,createAdminProfile);

router.post("/search",searchFlights);
router.post("/round",search);




module.exports =router;

