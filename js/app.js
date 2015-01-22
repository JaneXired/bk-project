var offset = 133,// header offset zur navigation in px
    topPos,
    windowTop,
    startMenu = $('body').find('#startMenu');


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

$(window).click(startMenu , function() {       // scroll top mit offset on click
    $(window).scrollTop(offset);
});
