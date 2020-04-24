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

    initialize();
    navigation();
    $('.modal').modal();
    $('.sidenav').sidenav();

});