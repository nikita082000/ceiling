$(function() {

    $('#lightgallery').lightGallery();

    if(window.matchMedia('(max-width: 768px)').matches)
    {
      $('.header-top-call-phone a, .question-info-phone, .how-job-list-item a').removeAttr('data-toggle').removeAttr('data-target');
    }

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
                breakpoint: 767,
                settings: {
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
      if ($(window).width() > 767) {
        $('.ceilings-type-wrapper-item:gt(-5)').toggle();
      } else {
        $('.ceilings-type-wrapper-item:gt(-11)').toggle();
      }
        $(this).hide();
    });

    if ($(window).width() < 767) {
        $('.ceilings-type-wrapper-item:gt(-11)').hide();
    }



    if ($(window).width() < 767) {
      $('.advantages-list').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false
      });
    }

    if ($(window).width() < 767) {
      $('.how-job-list').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false
      });
    }

    if ($(window).width() < 767) {
      $('.team-wrapper').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
      });
    }

    if ($(window).width() < 767) {
      $('.manufacture-wrapper-desc-companies').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
      });
    }


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

    $("#phone1, #phone2, #phone3").mask("+7(999) 999-9999");

    var calcSquare = $('.form-calculator-group-square');
  var calcDots = $('.form-calculator-group-dots');

  var calcResult = $('.form-calculator-group-result');

  $('.form-calculator-group').on('input', function() {
    // console.log(calcSquare.val());
    // console.log(calcDots.val());
    var calcSquareCount = calcSquare.val();
    var calcDotsCount = calcDots.val();

    if (calcSquareCount && calcDotsCount > 0) {
      var calcResultCount = (calcSquareCount * 270) + (calcDotsCount * 250);
      console.log(calcResultCount);
      calcResult.text(calcResultCount + ' руб.');
    }
  });

  var calcSquare = $('.form-calculator-group-square');
  var calcDots = $('.form-calculator-group-dots');

  var calcResult = $('.form-calculator-group-result');

  $('.form-calculator-group').on('input', function() {
    // console.log(calcSquare.val());
    // console.log(calcDots.val());
    var calcSquareCount = calcSquare.val();
    var calcDotsCount = calcDots.val();

    if (calcSquareCount && calcDotsCount > 0) {
      var calcResultCount = (calcSquareCount * 270) + (calcDotsCount * 250);
      console.log(calcResultCount);
      calcResult.text(calcResultCount + ' руб.');
      $('#calculator-result-hide').val(calcResultCount);
    }
  });

  // Отправка форм
  $(".modal-call-form, .modal-header-form").submit(function() {
    var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize()
      }).done(function() {
        $(this).find("input").val("");
        var url = "thanks.html";
        $(location).attr('href',url);
        // $('#myModal2').modal('hide');
        $('#myModal6').modal('hide');
        setTimeout(function() {
          th.trigger("reset");
        }, 500);
      });
    return false;
  });

  $(".calculator-gift-form").submit(function() {
    var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize()
      }).done(function() {
        $(this).find("input").val("");
        var url = "thanks.html";
        $(location).attr('href',url);
        // $('#myModal2').modal('hide');
        $('#myModal6').modal('hide');
        setTimeout(function() {
          th.trigger("reset");
        }, 500);
      });
    return false;
  });

});
