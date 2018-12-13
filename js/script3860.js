$( document ).ready(function() {
    setTimeout(function(){
        resize();
        $('body').css('opacity', 1);

    }, 300);

    $('#buter').on("click", function() {
        $('.mobile-menu').removeClass('hidden').addClass('shown');
        $('.header__buter').addClass('hidden');
        $('body .container').animate({right: 214}, 'fast');
        $('.header').animate({'margin-left': '-214px'}, 'fast');
        $('.mobile-menu').animate({right: 0}, 'fast');
    });

    $('#close').on("click", function() {
        $('body .container').animate({right: 0}, 'fast');
        $('.header').animate({'margin-left': '0'}, 'fast');
        $('.mobile-menu').animate({right: -214}, 'fast', function() {
            $('.mobile-menu').addClass('hidden').removeClass('shown');
            $('.header__buter').removeClass('hidden');
        });
    });

    $('.header-nav__item').on("click", function() {
        var href = $(this).attr('href');
        if ($('.mobile-menu').hasClass('shown')) {
            $('body .container').animate({right: 0}, 'fast');
            $('.header').animate({'margin-left': '0'}, 'fast');
            $('.mobile-menu').animate({right: -214}, 'fast', function() {
                $('.mobile-menu').addClass('hidden').removeClass('shown');
                $('.header__buter').removeClass('hidden');
            });
        }
        if (href.charAt(0) != 'index.html') {
            $('.header-nav__item').removeClass('active');
            $(this).addClass('active');
            var type = $(this).attr('data-type') + '';
            $('.cases').css('transition', 'none').css('opacity', 0);
            $('.cases__item').each(function () {
                var type_item = $(this).attr('data-type') + '';
                if (type_item.indexOf(type) == -1) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
            setTimeout(function () {
                $('.cases')
                    .css('transition', 'opacity 500ms ease-out')
                    .css('opacity', 1);
                resize();
            }, 100);
        }
    });
    var anchor = window.location.hash;

    var link;
    if (anchor) link = $('.header-nav__item[href='+anchor+']');

    if (anchor && link.length == 2) {
        $('.header-nav__item').removeClass('active');
        link.addClass('active');
        var type = link.attr('data-type')+'';
        $('.cases__item').each(function(){
            var type_item = $(this).attr('data-type')+'';
            if (type_item.indexOf(type) == -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }


    $(window).on('resize', function() {
        resize();

    });

    $(window).bind('orientationchange resize', function(event){
        resize();
    });
});

function resize() {
    var minWidth = 320;

    //var widthWrapper = $('.container').width();
    var widthWrapper = $('.cases').width();

    var count = Math.floor(widthWrapper / minWidth);
    vein.inject('.cases__item', {'width' : (widthWrapper/count).toFixed(2).slice(0,-1) - 0.07 + 'px'});
    //vein.inject('.cases__item', {'width' : (widthWrapper/count) + 'px'});
}