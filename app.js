const express = require('express');
const app = express()
const path = require(`path`)
const mongoose = require('mongoose');
const seedDB = require("./seed")
const productRoutes = require(`./routes/product`)
const methodOverride = require("method-override")
const ReviewRoute = require(`./routes/review`)

mongoose.connect("mongodb://127.0.0.1:27017/spartans")
    .then(() => {
    console.log("db connected succefully");
    })
    .catch((err) => {
    console.log(err, "not connected");
})

app.set(`view engine`, `ejs`)
app.set(`views`, path.join(__dirname, `views`))
app.use(express.static(path.join(__dirname, `public`)))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
    res.send("sab bdiya ")
})

// seedDB()
app.use(productRoutes)
app.use(ReviewRoute)

let PORT = 8080
app.listen(PORT, ()=> {
    console.log(`sever connected at port ${PORT}`);
})