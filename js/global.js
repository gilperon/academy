console.log('Start');

$(document).ready(function() {


    // Wait for 5 seconds (5000 milliseconds)
    // setTimeout(function() {
    //   // Change the id of the section element to slide-2-bg
    //   $('#slide-1-bg').attr('id', 'slide-1-bg');
    // }, 5000);


    // Add click event listener to all cancel href elements ul.navbar-nav li a
    //$('ul.navbar-nav li a').click(function(e) { // ativa para todos , o atual ativa apenas pro menu-concursos
    $('ul.navbar-nav li a#menu-cursos').click(function(e) {
        e.preventDefault(); 
        $('ul.navbar-nav li a').removeClass('active');
        $(this).addClass('active');
    });

    $('ul.navbar-nav li a').not('#navbarDropdown').click(function(e) {
        e.preventDefault(); 
        window.scrollTo(0,document.body.scrollHeight);
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
      $('.box-perguntas').click(function() { boxPerguntas(this.id) }); 

      //Perguntas
      function boxPerguntas(clicked_id) 
      {
          var onlynumber = clicked_id.replace(/\D/g, "");
          var zdiv = "z-"+onlynumber;
          var ydiv = "y-"+onlynumber;
          if(document.getElementById(zdiv).style.display=="none"){
              document.getElementById(zdiv).style.display='block';
              document.getElementById(ydiv).className='p-titulo arrow-up';
              document.getElementById(ydiv).style.fontWeight ='600';
          }else{
              document.getElementById(zdiv).style.display='none';
              document.getElementById(ydiv).className='p-titulo arrow-down';
              document.getElementById(ydiv).style.fontWeight='400';
          }
      }










});


