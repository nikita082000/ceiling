$(function() {

    $('#lightgallery').lightGallery();

    $('.what-get-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    });

    $('#manufacture-lightgallery').lightGallery();

    $('#certificates').lightGallery();

    $('.manufacture-wrapper-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });

    if ($(window).width() > 768 && $('.ceilings-type-wrapper-item').length > 11) {
        $('.ceilings-type-wrapper-item:gt(-5)').hide();
    }

    $('.show-more').on('click', function() {
        $('.ceilings-type-wrapper-item:gt(-5)').toggle();
        $(this).hide();
    });

    $('.show-certificates').on('click', function() {
      $('.manufacture-certificates-hide').toggle();

      $(this).text() === 'показать сертификаты' ? $(this).text('скрыть сертификаты') : $(this).text('показать сертификаты');
    });



});