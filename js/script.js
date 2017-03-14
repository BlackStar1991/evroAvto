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



};