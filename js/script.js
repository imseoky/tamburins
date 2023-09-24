$(document).ready(function(){

    if($(window).width() < 1732){ $('#fullpage').removeAttr('id'); }

    $('#fullpage').fullpage({
        scrollingSpeed:300,
        anchors : ['anchors1','anchors2','anchors3','anchors4','anchors5'],
        scrollBar : true,
        normalScrollElements : '.footer',
        fitToSection : false,
        responsiveWidth: 1732,
        afterResponsive: function (isResponsive) {}
    });

    $('.tab-btn li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    
        const result = $(this).attr('data-alt');
    
        $('.tab-tabs li').removeClass('active');
        $(`#${result}`).addClass('active');
    });

    $('.log').click(function(){
        $('.login').toggleClass('on');
    });


    $('button').click(function(){
        alert("hello, tamburins!");
    });


    window.onresize = function(){
        const width = window.innerWidth;
        
        console.log(width);

        if (width >= 1500){
            location.reload(true);
        }
    }
});