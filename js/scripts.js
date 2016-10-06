$(document).ready(function(){
    jQuery('#out-of-the-box-demo').slippry({
        controls: true,
    
    });
    
    $("body").hover(function(){
    $(".sy-caption").show();
    });
    
    $("iframe").hover(function(){
    $(".sy-caption").show();
    });
    
     $("#quizHeader").hover(function(){
    $(".sy-caption").show();
    });
    
    $("img").hover(function(){
    $(".sy-caption").hide();
    });
    
    $(".sy-caption").hover(function(){
    $(".sy-caption").hide();
    });
    
    var away = false;

    $('#header').click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });
    
    $('.footer').click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });
    
    
});

