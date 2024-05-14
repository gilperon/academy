

$( document ).ready(function() {


    $('#slider-testimonial').owlCarousel({
        margin: 15,
        nav: true,
        loop: true,
        dots: true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1,
                stagePadding:40,
            },
            568: {
                items: 1,
            },
            996: {
                items: 2,
            }
        }
    });


    $('#slider-docente').owlCarousel({
        margin: 15,
        nav: true,
        loop: true,
        dots: false,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1,
                stagePadding:40,
            },
            768: {
                items: 3,
            }
        }
    });


    $('#slider-especialidades').owlCarousel({
        margin: 15,
        nav: true,
        loop: true,
        dots: false,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1,
                stagePadding:40,
            },
            768: {
                items: 2,
            }
        }
    });


    $('#slider-cursos-1').owlCarousel({
        margin: 15,
        nav: true,
        loop: true,
        dots: false,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1,
                stagePadding:50,
            },
            568: {
                items: 2,
                stagePadding:50,
            },
            992: {
                items: 3,
                stagePadding:50,
            },
        }
    });


    $('#slider-cursos-2').owlCarousel({
        margin: 15,
        nav: true,
        loop: true,
        dots: false,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1,
                stagePadding:50,
            },
            568: {
                items: 2,
                stagePadding:50,
            },
            992: {
                items: 3,
                stagePadding:50,
            },
        }
    });





    //Coloca first-active e last-active no carousel
    $('.owl-carousel').trigger('to.owl.carousel', 0);
    function brandSliderClasses() {
        $('.owl-carousel').each(function() {
            var total = $(this).find('.owl-item.active').length;
            $(this).find('.owl-item').removeClass('first-active');
            $(this).find('.owl-item').removeClass('last-active');
            $(this).find('.owl-item.active').each(function(index) {
                if (index === 0) {
                    $(this).addClass('first-active')
                }
                if (index === total - 1 && total > 1) {
                    $(this).addClass('last-active')
                }
            })
        })
    }
    brandSliderClasses();
    $('.owl-carousel').on('translated.owl.carousel', function(event) {
        brandSliderClasses()
    });
    //Clica em um vai para a primeira posição
    $(document).on('click', '.owl-item', function() {
        let carousel = $(this).closest('.owl-carousel');
        let index = $(this).index();
        let relativeIndex = carousel.data('owl.carousel').relative(index);
        carousel.trigger('to.owl.carousel', [relativeIndex, 300]);
    });










});