$(document).ready(function () {
    
    function initialize(){
        // run this first.  it's a spa.  this hides stuff.
        hideAll();
        $("#index-page-content").show();
    }

    function hideAll(){
        $(".page-content").hide();
    }

    function navigation(){
        //sets up all the nav links and buttons with handlers
        $("#logo-container").click(initialize);
        $(".courses-link").click(
            function(){ 
                hideAll();
                $("#courses-page-content").show();
            }
        );

        $(".free-videos-link").click(
            function(){
                hideAll();
                $("#free-videos-page-content").show();
            }
        );

        $(".about-link").click(
            function(){
                hideAll();
                $("#about-page-content").show();
            }
        );
    }

    function showSuccessToast(){
        M.toast({html: "That worked!  We got it!  Thank you!"});
    }

    function showFailToast(){
        M.toast({html: "Something went wrong.  It's us, not you.  Sorry."})
    }

    function contactFormHandler(event){
        event.preventDefault();
        const formData = {
            firstName: $("#contact-first-name").val(),
            lastName: $("#contact-last-name").val(),
            email: $("#contact-email").val(),
            message: $("#contact-text").val()
        }
        //anything in there?
        if(firstName.length < 1 || lastName.length < 1 || message.length < 1){
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

    initialize();
    navigation();
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('#contaxt-form').on("submit", contactFormHandler);

});