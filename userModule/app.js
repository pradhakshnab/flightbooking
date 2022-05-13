require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require("./api/userProfile/userProfile.router");

app.use(express.json());
app.use("/api/v1.0/flight", userRouter);


app.listen(process.env.APP_PORT, () => {
    console.log("server is up and running!");
})