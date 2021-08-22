$(function(){
    $('.top-slider__inner').slick({
        dots:true,
        arrows:false,
        fade: true,
        autoplay:true,
        autoplaySpeed:2000
    });

    $(".star").rateYo({
        starWidth: "17px",
        normaFill: "#ccccce",
        ratedFill: "#ffc35b",
        numStars: 10,
        readOnly: true
    });


});