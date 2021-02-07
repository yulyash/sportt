$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
                $("#navFixed").css({'position': 'fixed', "background-color": "rgba(27, 32, 38, .5)"});
                $("#tempNav").css({'height': '81px'});

        } else {
            $("#navFixed").css({'position': 'static',"background-color": "rgba(27, 32, 38, .3)"});
            $("#tempNav").css({'height': '0'});
        }
    });

    $("body").on('click', '[href*="#"]', function(e){
        let fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 800);
        e.preventDefault();
    });
});

