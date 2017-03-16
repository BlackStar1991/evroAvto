window.onload = function () {


    $(".box-sliderOne__items").lightSlider({
        item: 3,
        adaptiveHeight: true,
        autoWidth: false,
        loop: true,
        controls: true,
        // thumbItem:0,
        gallery: true,
        thumbMargin: 2,
        onSliderLoad: function(el) {
            el.lightGallery();
        }

    });

    $(window).on("load", function () {
        $('.box-gbo__offer-image').liCover({
            parent: $('.box-gbo__offer'),
            position: 'absolute',
            veticalAlign: 'middle',
            align: 'center'
        });
    });

    $(window).on("load", function () {
        $('.box-gbo__offer-image').liCover({
            parent: $('.box-gbo__offer'),
            position: 'absolute',
            veticalAlign: 'middle',
            align: 'center'
        });
    });



    $(".box-sliderOffers__items").lightSlider({
        item: 5,
        adaptiveHeight: true,
        autoWidth: false,
        loop: true,
        controls: true,
        keyPress: false,
        // gallery: true,
        slideMargin: 1,
        // thumbMargin: 2,
        // thumbItem:0,

        onSliderLoad: function(el) {
            el.lightGallery({
                thumbnail:true,
                animateThumb: false,
                showThumbByDefault: false
            });
        }

    });




};