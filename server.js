const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.post("/api/contact", function(req, res){
    //collect the data and send it
    let formData = req.body;
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass // generated ethereal password
        }
      });

      let info = await transporter.sendMail({
        from: formData.email, // sender address
        to: "actual@contentfour.com", // list of receivers
        subject: "[maddevskilz] Contact Form "+ formData.firstName + " " + formData.lastName, // Subject line
        text: formData.firstName + " " + formData.lastName + "(" + formData.email + ") writes: " + formData.message
      });

      console.log("Message sent: %s", info.messageId);

});

app.listen(PORT, function() {
    console.log("maddevskilz is online at port " + PORT);
});