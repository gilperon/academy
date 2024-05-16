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


  $(".read-more").click(function() {
    var $texto = $("#texto-expandir");
    if ($texto.css("display") === "none") {
        $texto.css("display", "inline");
        $(this).text("- ler menos");
    } else {
        $texto.css("display", "none");
        $(this).text("+ ler mais");
    }
});




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





/*!
* JavaScript para validacoes dos Forms
*/
$(document).ready(function () {

  $(".input-custom").on('focusout', function () {
      const _ = this;
      let name = _.getAttribute('name');
      let value = _.value;
      ValidateFields(name, value);
  });

  $("#form-index").submit(function (e) {
      e.preventDefault();
      const inputs = document.querySelectorAll('.input-custom');
      let error = 0;
      let success = 0;
      for (const input of inputs) {
          let name = input.getAttribute('name');
          let value = input.value;
          success = ValidateFields(name, value, 'form');
          if (error == 0 && !success) { $(`#${name}`).focus(); error++; }  //focus first error
      }

      //submit form
      if (error == 0) {

          this.submit();
      }
  });

  $("#whatsapp").on('input', function (e) { e.target.value = PhoneMask(e.target.value, 'celular') });
});


function ValidateFields(name, value, tipo) {
  let x = true; //caso o status seja alterado para false, nao submete

  switch (name) {
      case 'nome':
          x = ValidateLength();
          break;
      case 'SingleLine':
      case 'MultiLine':
          x = ValidateLength();
          break;
      case 'email':
          x = ValidateEmail();
          break;
      case 'whatsapp':
      case 'whatsapp':
          let phoneType = name == 'SingleLine3' ? 'phone' : 'cell';
          x = ValidatePhone(phoneType);
          break;
      case 'Dropdown':
      case 'Dropdown1':
          x = value == 0 ? false : true;
          DisplayError(!x);
          break;
  }

  return (x) ? true : false;

  //Global Validations
  function DisplayError(error) {
      error ? $(`#${name}`).next().show() : $(`#${name}`).next().hide();
  }   

  function ValidateLength() {
      let x = (value.trim().length <= 0) ? false : true;
      DisplayError(!x)
      return x;
  }

  function ValidateFullName() {

      let err = false;

      if (value.trim().length <= 0) {
          err = 1;
      }

      let nameParts = value.trim().split(" ");
      if (nameParts.length < 2) {
          err = 1;
      }

      let isValidPart = /^[a-zA-Z\s]+$/;
      for (let part of nameParts) {
          if (!isValidPart.test(part)) {
              err = 1;
          }
      }

      if (err) {
          DisplayError(true);
          return false;
      } else {
          const firstName = nameParts.shift().trim();
          const lastName = nameParts.join(" ").trim();
          $('input[name="Name_First"]').val(firstName);
          $('input[name="Name_Last"]').val(lastName);
          DisplayError(false);
          return true;
      }

  }

  function ValidateEmail() {
      const isValidEmail = value => { return value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/); }
      if (!isValidEmail(value)) {
          $(`#${name}`).next().show();
          return false
      } else {
          $(`#${name}`).next().hide();
          return true
      }
  }

  function ValidatePhone(str) {
      let sizeOfPhone = str == 'phone' ? 14 : 15;
      if (value.trim().length < sizeOfPhone) {
          $(`#${name}`).next().show();
          return false
      } else {
          if (sizeOfPhone === 15 && value.trim()[5] !== '9') {
              $(`#${name}`).next().show();
              return false
          }
          $(`#${name}`).next().hide();
          return true
      }
  }
}

//Máscara para telefone e celular Zoho
function PhoneMask(phone, tipo) {
  if (tipo == 'telefone') {
      return phone.replace(/\D/g, '')
          .replace(/^(\d)/, '($1')
          .replace(/^(\(\d{2})(\d)/, '$1) $2')
          .replace(/(\d{4})(\d{1,5})/, '$1-$2')
          .replace(/(-\d{4})\d+?$/, '$1');
  }
  if (tipo == 'celular') {
      return phone.replace(/\D/g, '')
          .replace(/^(\d)/, '($1')
          .replace(/^(\(\d{2})(\d)/, '$1) $2')
          .replace(/(\d{5})(\d{1,5})/, '$1-$2')
          .replace(/(-\d{4})\d+?$/, '$1');
  }
}



