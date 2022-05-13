const {createUser,  getUserByEmail} = require("./userProfile.service");
const {genSaltSync,hashSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const { json } = require("express");

module.exports ={
    createUser:(req,res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        createUser(body, (err,results)=> {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Db connection error",
                });
            }
            return res.status(200).json({
                success:1,
                data:results,
            });
        });
    },
  

    login: (req,res) =>{
        const body = req.body;
        getUserByEmail(body.email,(err, results) =>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "invalid email or password",
                });
            }
            const result  = compareSync(body.password,results.password);
            if(result){
                result.password = undefined;
                const jsontoken = sign ({result : results}, process.env.KEY, { expiresIn: "1h"});
                return res.json({
                    success: 1,
                    message: "Login successful!",
                    token : jsontoken,
                });
            }
            else{
                return res.json({
                    success: 0,
                    message: "Invalid email or password",
                });
            }
        });

    },


};