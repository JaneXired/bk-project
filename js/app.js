var offset = 133,// header offset zur navigation in px
    topPos,
    windowTop,
    navHeight = $('body').find('#navigation').height() + 10;   // höhe des navigationscontainers + 10px margin

$(window).scroll(function (){

    topPos = $('body').offset().top;        // = 0 weil body offset zum 0 punkt
    windowTop = $(window).scrollTop();      // window position

    console.log('topPos' + topPos + offset);
    console.log('windowTop' + windowTop);


    if(windowTop > topPos + offset){         // solange dein bildausschnitt größer des 0 punktes + offset ist
        $('#navigation').addClass('scroll');
    } else {
        $('#navigation').removeClass('scroll');
    }

});

$('a[href^=#]').on('click', function(e){
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop:$(href).offset().top - navHeight     // zum Element springen und 10px hochfahren weil wegen fixed header
    },'fast');
    e.preventDefault();
});