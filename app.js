const express = require('express');
const app = express()
const path = require(`path`)
const mongoose = require('mongoose');
const seedDB = require("./seed")
const productRoutes = require(`./routes/product`)
const methodOverride = require("method-override")
const ReviewRoute = require(`./routes/review`)
const session = require("express-session")
const flash = require("connect-flash")
const AuthRoutes = require("./routes/auth")
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/User")

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
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("sab bdiya ")
})

let configSession = {
    secret:"keyboardcat",
        resave: false,
        saveUninitialized:true

}
app.use(session(configSession))
app.use(
    session({
        secret: "mysectret shut up",
        resave: false,
        saveUninitialized:true
    })
)

app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash("error");
    next()
})

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




// seedDB()
app.use(productRoutes)
app.use(ReviewRoute)
app.use(AuthRoutes)

let PORT = 8080
app.listen(PORT, ()=> {
    console.log(`sever connected at port ${PORT}`);
})