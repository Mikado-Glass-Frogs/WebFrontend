var main = function(){
    $('.navbar-more').click(function (){
        $('html, body').animate({
        scrollTop: $("#more").offset().top
        });
    });
};

$(document).ready(main);