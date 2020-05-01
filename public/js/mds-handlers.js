$(document).ready(function () {
    var testimonials = [
        {quote: "I'm currently doing your course  \"Building RESTful APIs with Flask\". I just finished the 2nd chapter. I just wanted to say thank you. I've been doing a lot of online courses and it's great to find someone who does it with personality. These things can get boring and pretty monotonous. I've been laughing while learning with you.    Thanks for being you. Thanks for being funny.", by: "Poeletso M"},
        {quote: "Dear Mr. Van Horn, I was delighted for heaving the chance to learn from the Building RESTful APIs with Flask LinkedIn course you kindly designed and delivered. Therefore, I will be happy to have you among my LinkedIn connections. Thank you in advance and will appreciate whatever you. Kindest regards", by: "Dimitar I."},
        {quote: "Hello! I enjoyed your C# courses!   It's great to hear from a celebrity.  You have close to one million views on Lynda!", by: "John D"},
        {quote: "Hello sir,  Your course content is good and quality of content is also better than any other courses available on the same topic. Thank you for your contribution.", by: "Prasad N"},
        {quote: "I'm taking the Python PyCharm course at LinkedIn and finding it so helpful in learning how to setup the Python development.  My experience has been with Java and more recently Xcode Swift but I'm finding Python a much better experience.  Looking forward to more courses", by: "Bob E"},
        {quote: "Hi Bruce, I studied your course on Lynda.com. It is helpful. Really wish you can make a JAVA course. Anyway, I want to connect with you 😄", by: "Han Z"},
        {quote: "Taking your C# course to help to learn the language for my new job. That's an awesome job! Hope to be connected to your network as well. Thanks!", by: "Leon M"},
        {quote: "Thanks for your efforts, one main problem with many courses available is that, they stop at Hello World program. Lot of emphasis is on theory and very little on actual programming practices and how to set up a project. Hope to see the course soon. I am doing the Essential Training 2 now. Once again thank you for your efforts.", by: "Nash"},
        {quote: "Watching your C# 1& 2 as a refresher! Great job and keep them coming!", by:"Kirby A"},
        {quote: "Hi Bruce, I just went through your course \"Learning Python with PyCharm\" and I'm here just to say thank you, it's excellent. It's perfect for me, coming from a c# background and moving into new tooling but understanding how to code a different flavour.", by:"Adrian P"},
        {quote: "Just finished your pycharm course.  I thought it was fantastic. I got so many tips and tricks out of it. Thank you!!!", by: "Leon R"}
    ];

    var testimonialIndex = 0;

    function initialize() {
        // run this first.  it's a spa.  this hides stuff.
        hideAll();
        $("#index-page-content").show();
        $("#testimonial").text(testimonials[testimonials.length - 1].quote);
        $("#testimonial-citation").text(testimonials[testimonials.length - 1].by);
    }

    function hideAll() {
        $(".page-content").hide();
    }

    function navigation() {
        //sets up all the nav links and buttons with handlers
        $("#logo-container").click(initialize);
        $(".courses-link").click(
            function () {
                hideAll();
                $("#courses-page-content").show();
            }
        );

        $(".free-videos-link").click(
            function () {
                hideAll();
                $("#free-videos-page-content").show();
            }
        );

        $("#contact-submit").on("click", contactFormHandler)
    }

    function showSuccessToast() {
        M.toast({ html: "That worked!  We got it!  Thank you!" });
    }

    function showFailToast() {
        M.toast({ html: "Something went wrong.  It's us, not you.  Sorry." })
    }

    function removeSpaces(string) {
        return string.split(' ').join('');
    }

    function contactFormHandler(event) {
        event.preventDefault();
        //validate the captcha
        let str1 = removeSpaces($("#txtCaptcha").val());
        let str2 = removeSpaces($("#CaptchaInput").val());
        if(!str2){
            M.toast({ html: "You need to fill in the captcha."});
            return false;
        }

        if(!str1 === str2){
            M.toast({ html: "You got the captcha wrong."});
            return false;
        }

        const formData = {
            firstName: $("#contact-first-name").val(),
            lastName: $("#contact-last-name").val(),
            email: $("#contact-email").val(),
            message: $("#contact-text").val()
        }
        //anything in there?
        if (formData.firstName.length < 1 || formData.lastName.length < 1 || formData.message.length < 1) {
            $.ajax(
                {
                    type: "POST",
                    url: "/api/contact",
                    data: formData,
                    success: showSuccessToast,
                    fail: showFailToast
                }
            );
        } else {
            return false;
        }
    }

    function generateCaptcha(){
        var a = Math.ceil(Math.random() * 9) + '';
        var b = Math.ceil(Math.random() * 9) + '';
        var c = Math.ceil(Math.random() * 9) + '';
        var d = Math.ceil(Math.random() * 9) + '';
        var e = Math.ceil(Math.random() * 9) + '';
        var code = a + b + c + d + e;
        return code;
    }

    initialize();
    navigation();
    $('.modal').modal();
    $('.sidenav').sidenav();

    const captcha = generateCaptcha();
    $("#txtCaptcha").val(captcha);
    $("#CaptchaDiv").html(captcha);
    
    var testimonialTimer = setInterval(function(){
        console.log("Rotate");
        if(testimonialIndex++ < testimonials.length - 1){
            testimonialIndex++;
        } else {
            testimonialIndex = 0;
        }
        console.log(testimonials[testimonialIndex].quote);
        $("#testimonial").text(testimonials[testimonialIndex].quote);
        $("#testimonial-citation").text(testimonials[testimonialIndex].by);
    }, 6000);

});