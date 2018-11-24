$(function() {

    $('#lightgallery').lightGallery();

    $('.what-get-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });

    if ($(window).width() > 768 && $('.ceilings-type-wrapper-item').length > 11) {
        $('.ceilings-type-wrapper-item:gt(-5)').hide();
    }

    $('.show-more').on('click', function() {
        $('.ceilings-type-wrapper-item:gt(-5)').toggle();
        $(this).hide();
    });



});