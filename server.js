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
    var client = new postmark.ServerClient("2543114b-139c-4f0a-bcfb-c3173e4815ee");

    client.sendEmail({
        "From": formData.email,
        "To": "actual@contentfour.com",
        "Subject": "[maddevskilz] Contact Form "+ formData.firstName + " " + formData.lastName,
        "TextBody": formData.firstName + " " + formData.lastName + "(" + formData.email + ") writes: " + formData.message
    });

});

app.listen(PORT, function() {
    console.log("maddevskilz is online at port " + PORT);
});