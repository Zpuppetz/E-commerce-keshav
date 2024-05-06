const express = require("express");
const app = express();
var session = require("express-session");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }, to use on http 
  })
);

app.get('/', (req, res) => {
    res.send("hello ")
})

app.get("/viewCount", (req, res) => {
    if (req.session.viewCount) {
    req.session.viewCount +=1
    } else {
      req.session.viewCount = 1;
    }
    res.send(`my visit is ${req.session.viewCount}`)
})

app.get("/greet", (req, res) => {
    req.session.username = "sam"
    res.redirect("/finalGreet")
})
app.get("/finalGreet", (req, res) => {
    let { username = "anonymous" } = req.session
    res.send(`hello goodmorning from ${username}`)
})
const port = 8000;
app.listen(port, () => {
  console.log(port);
});
