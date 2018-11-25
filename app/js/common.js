$(function() {

    $('#lightgallery').lightGallery();

    $('.what-get-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#manufacture-lightgallery').lightGallery();

    $('#certificates').lightGallery();

    $('#video-gallery, #video-gallery-2, #video-gallery-3').lightGallery();

    $('#fotorama-gallery, #fotorama-gallery-2, #fotorama-gallery-3').lightGallery();

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

    $('.reviews-read-more').on('click', function() {
      $(this).parent().find('.reviews-review-text-hide').removeClass('reviews-review-text-hide');
      $(this).toggle();
    });

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });



});