const express = require('express');
const app = express()
const cookieParser = require("cookie-parser");


app.use(cookieParser("maihuasfafas"))

app.get("/", (req, res) => {
    res.send("sab shi hai")
})

app.get("/getCookies", (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);

})


app.get("/setCookies", (req, res) => {
    res.cookie(`username`, `maverick`);
    res.cookie(`mode`, `dark`);
    res.cookie(`favsport`, `volletballl`);
    res.cookie(`subject`, `dev`);
    res.cookie(`password`, `anshwasn`, {signed: true});
    res.send("maine cookie set karwa di")

})

app.get("/signedCookies", (req, res) => {
    res.send(req.signedCookies)
})

const port = 8000
app.listen(port, () => {
    console.log(port);

})