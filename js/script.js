window.onload = function () {

    console.log("ok");

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
};