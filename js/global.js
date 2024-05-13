console.log('Start');

$(document).ready(function() {

  // _home_hero_slider
  if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".home-slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  } else {
    console.error('Swiper is not defined. Make sure you have included the Swiper library.');
  }



    // Add click event listener to all cancel href elements ul.navbar-nav li a
    //$('ul.navbar-nav li a').click(function(e) { // ativa para todos , o atual ativa apenas pro menu-concursos
    $('ul.navbar-nav li a#menu-cursos').click(function(e) {
        e.preventDefault(); 
        $('ul.navbar-nav li a').removeClass('active');
        $(this).addClass('active');
    });



    // Corrige comportamento inesperado no mobile para ir até a ancora e esconde o menu mobile
    $('#mobile-navigation a').click(function(e) {
      var target = $(this).attr('href');
      $('.btn-close').click();
      if (target.charAt(0) === '#') {
          e.preventDefault(); 
          var offset = $(target).offset().top;
          $('html, body').animate({
              scrollTop: offset
          }, 500); 
      }
  });



    $('#flipButton').on('click', function() {
      $('#flipSVG').toggleClass('flipped');
    });

      const observer = new MutationObserver(mutationsList => {
        mutationsList.forEach(mutation => {
          if (mutation.type === 'attributes') {
            const flipButton = $('#flipButton');
            const flipSVG = $('#flipSVG');
            if (!flipButton.hasClass('show')) {
              flipSVG.removeClass('flipped');
            } else {
              flipSVG.addClass('flipped');
            }

            const flipButtonMobile = $('#flipButtonMobile');
            const flipSVGMobile = $('#flipSVGMobile');
            if (!flipButtonMobile.hasClass('show')) {
                flipSVGMobile.removeClass('flipped');
              } else {
                flipSVGMobile.addClass('flipped');
              }

            const dropCursos = $('#dropCursos');
            if (!dropCursos.hasClass('show')) {
              $('#navbarDropdown').removeClass('active');
            } else {
              $('#navbarDropdown').addClass('active');
            }
          }
        });
      });

      observer.observe(document.getElementById('flipButton'), { attributes: true });
      observer.observe(document.getElementById('flipButtonMobile'), { attributes: true });
      observer.observe(document.getElementById('dropCursos'), { attributes: true });
    

      //Perguntas e Respostas
      $('.box-perguntas').click(function() {
          var $clickedBox = $(this);
          var $resposta = $clickedBox.find('.p-resposta');

          if ($resposta.is(':hidden')) {
              $resposta.slideDown();
              $clickedBox.find('.p-titulo').removeClass('arrow-down').addClass('arrow-up').css('font-weight', '600');
          } else {
              $resposta.slideUp();
              $clickedBox.find('.p-titulo').removeClass('arrow-up').addClass('arrow-down').css('font-weight', '400');
          }
      });


});


