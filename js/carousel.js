

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
            768: {
                items: 2,
            }
            ,
            980: {
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
                stagePadding:40,
            },
            768: {
                items: 3,
            }
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
                stagePadding:40,
            },
            768: {
                items: 3,
            }
        }
    });



});