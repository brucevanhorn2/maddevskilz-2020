const express = require("express");
const postmark = require("postmark");
const sequelize = require("sequelize");
const models = require("./models");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/api/courses", function(req, res){
    models.findAll({})
        .then(function(dbPost){
            res.json(dbPost);
        });
});

app.get("/api/courses/:id", function(req, res){
    models.findOne({where: { id: req.params.id}})
        .then(function(dbPost){
            res.json(dbPost);
        });
});

app.get("/api/videos", function(req, res){
    models.findAll({}).then(function(dbPost){
        res.json(dbPost)
    });
});

app.get("/api/search", function(req, res){

});

app.post("/api/contact", function(req, res){
    //collect the data and send it
    let formData = req.body;
    models.Contact.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message
    });    
    // I don't need this right now
    // var client = new postmark.ServerClient(process.env.POSTMARK_KEY);
    // //console.log(formData.message);
    // client.sendEmail({
    //     "From": formData.email,
    //     "To": "actual@contentfour.com",
    //     "Subject": "[maddevskilz] Contact Form "+ formData.firstName + " " + formData.lastName,
    //     "TextBody": formData.firstName + " " + formData.lastName + "(" + formData.email + ") writes: " + formData.message
    // });
    res.end();

});

models.sequelize.sync({force: true}).then(
    function(){
        app.listen(PORT, function() {
            console.log("maddevskilz is online at port " + PORT);
        });
    }
);
