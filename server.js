const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000,() => {
    console.log("Port is running on 5000");
    }
);

const userroutes = require("./Routers/UserRoutes");
app.use("/api/user",userroutes);

const bookingdetails = require("./Routers/BookingRoutes");
app.use("/api/booking",bookingdetails);

const Package = require("./Routers/PackageRoutes");
app.use("/api/package",Package)

const Blog = require("./Routers/BlogRoutes");
app.use("/api/blog", Blog)

mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log("Connection to mongo_db Successfull..."); })
    .catch(() => { console.log("Connection to mongo_db FAILED. "); })

