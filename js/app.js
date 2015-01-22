
$(window).scroll(function (){

    console.log(window.scrollY);

    if(window.scrollY > 133){
        $('#navigation').addClass('scroll');
    } else {
        $('#navigation').removeClass('scroll');
    }

});

$(function() {
    $('#startMenu').on('click', function() {
        $('#news').addClass('topSpaceScroll');
    });
});

$(window).scrollTop(function() {
    $('#news').removeClass('topSpaceScroll');
});