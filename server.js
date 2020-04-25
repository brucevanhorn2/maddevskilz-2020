const express = require("express");
const postmark = require("postmark");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.post("/api/contact", function(req, res){
    //collect the data and send it
    let formData = req.body;
    var client = new postmark.ServerClient(process.env.POSTMARK_KEY);
    //console.log(formData.message);
    client.sendEmail({
        "From": formData.email,
        "To": "actual@contentfour.com",
        "Subject": "[maddevskilz] Contact Form "+ formData.firstName + " " + formData.lastName,
        "TextBody": formData.firstName + " " + formData.lastName + "(" + formData.email + ") writes: " + formData.message
    });
    res.end();

});

app.listen(PORT, function() {
    console.log("maddevskilz is online at port " + PORT);
});