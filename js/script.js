var main = function(){
    $('.navbar-more').click(function (){
        $('html, body').animate({
        scrollTop: $("#more").offset().top
        });
    });

    $('.navbar-about').click(function (){
        $('html, body').animate({
        scrollTop: $("#about").offset().top
        });
    });
};

$(document).ready(main);