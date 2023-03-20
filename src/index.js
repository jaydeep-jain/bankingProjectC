const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require("./routes/route")
app.use(express.json());

mongoose.set("strictQuery", false);


const URL = "mongodb+srv://jaydeepjain:05178@cluster0.aawkugv.mongodb.net/banking";

mongoose.connect(URL, {useNewUrlParser: true})
.then(()=>{
    console.log("huuu data base is connected")
})
.catch((err=>{console.log("mongo is disappointend " + err)}))

app.use("/", route);

app.listen(3000, ()=>{
    console.log("Your app is  running on PORT 3000")
})
