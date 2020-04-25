$(document).ready(function () {

    function initialize() {
        // run this first.  it's a spa.  this hides stuff.
        hideAll();
        $("#index-page-content").show();
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

        $(".about-link").click(
            function () {
                hideAll();
                $("#about-page-content").show();
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

});