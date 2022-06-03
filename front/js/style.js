$(document).ready(function() {
    $('.navbar-light .dmenu').hover(function() {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function() {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });

    $('.student').click(function() {
        $('#student').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('.stu').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('#corporate').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.cor').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#press').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.pre').css({
            'display': 'none',
            'transition': '0.5s'
        });
    });
    $('.corporate').click(function() {
        $('#student').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.stu').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#corporate').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('.cor').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('#press').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.pre').css({
            'display': 'none',
            'transition': '0.5s'
        });
    });
    $('.press').click(function() {
        $('#student').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.stu').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#corporate').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('.cor').css({
            'display': 'none',
            'transition': '0.5s'
        });
        $('#press').css({
            'display': 'block',
            'transition': '0.5s'
        });
        $('.pre').css({
            'display': 'block',
            'transition': '0.5s'
        });
    });

    $('#id1').click(function() {
        $(this).css({
            'background-color': '#fa5140',
            'color': '#ffffff',
            'transition': '0.5s'
        });
        $("#id2").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id3").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id4").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id5").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id6").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });

        $("#2016to18").css({
            'display': 'block',
            'transition': '0.5s'
        });
        $("#2014to16").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2013to15").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2012to14").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2011to13").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2010to12").css({
            'display': 'none',
            'transition': '0.5s'
        });
    });

    $('#id2').click(function() {
        $('#id1').removeClass('id1');
        $(this).css({
            'background-color': '#fa5140',
            'color': '#ffffff',
            'transition': '0.5s'
        });
        $("#id1").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id3").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id4").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id5").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id6").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });

        $("#2016to18").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2014to16").css({
            'display': 'block',
            'transition': '0.5s'
        });
        $("#2013to15").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2012to14").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2011to13").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2010to12").css({
            'display': 'none',
            'transition': '0.5s'
        });
    });

    $('#id3').click(function() {
        $('#id1').removeClass('id1');
        $(this).css({
            'background-color': '#fa5140',
            'color': '#ffffff',
            'transition': '0.5s'
        });
        $("#id2").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id1").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id4").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id5").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id6").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });

        $("#2016to18").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2014to16").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2013to15").css({
            'display': 'block',
            'transition': '0.5s'
        });
        $("#2012to14").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2011to13").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2010to12").css({
            'display': 'none',
            'transition': '0.5s'
        });

    });

    $('#id4').click(function() {
        $('#id1').removeClass('id1');
        $(this).css({
            'background-color': '#fa5140',
            'color': '#ffffff',
            'transition': '0.5s'
        });
        $("#id2").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id3").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id1").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id5").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id6").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });

        $("#2016to18").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2014to16").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2013to15").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2012to14").css({
            'display': 'block',
            'transition': '0.5s'
        });
        $("#2011to13").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2010to12").css({
            'display': 'none',
            'transition': '0.5s'
        });

    });

    $('#id5').click(function() {
        $('#id1').removeClass('id1');
        $(this).css({
            'background-color': '#fa5140',
            'color': '#ffffff',
            'transition': '0.5s'
        });
        $("#id2").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id3").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id4").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id1").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id6").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });

        $("#2016to18").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2014to16").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2013to15").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2012to14").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2011to13").css({
            'display': 'block',
            'transition': '0.5s'
        });
        $("#2010to12").css({
            'display': 'none',
            'transition': '0.5s'
        });

    });

    $('#id6').click(function() {
        $('#id1').removeClass('id1');
        $(this).css({
            'background-color': '#fa5140',
            'color': '#ffffff',
            'transition': '0.5s'
        });
        $("#id2").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id3").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id4").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id5").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });
        $("#id1").css({
            'background-color': '#ffffff',
            'color': '#414141',
            'transition': '0.5s'
        });

        $("#2016to18").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2014to16").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2013to15").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2012to14").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2011to13").css({
            'display': 'none',
            'transition': '0.5s'
        });
        $("#2010to12").css({
            'display': 'block',
            'transition': '0.5s'
        });


    });


    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {

        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
    });

});

/*$( window ).load(function() {
  $('#id1').addClass('id1');
});*/

/*$(document).ready(function(){
 $("#jquery_jplayer_1").jPlayer({
  ready: function () {
   $(this).jPlayer("setMedia", {
    m4a: "../video/kapil-dev.mp4",
    //oga: "/media/mysound.ogg"
   });
  },
  swfPath: "/js",
  supplied: "m4a, oga"
 });
});*/