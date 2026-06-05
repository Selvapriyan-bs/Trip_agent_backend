const mongoose =require("mongoose")
const { link } = require("../Routers/UserRoutes")

const PackageSchema = new mongoose.Schema({
 id:Number,
 title:String,
 destination:String,
 region:String,
 country:String,
 price:Number,
 days:Number,
 rating:Number,
 reviews:String,
 badge:String,
 description:String,
 image:String,
})

module.exports =mongoose.model("Packages",PackageSchema);