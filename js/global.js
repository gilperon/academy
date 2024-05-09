console.log('Start');

$(document).ready(function() {
    // Add click event listener to all cancel href elements
    $('ul.navbar-nav li a').click(function(e) {
        e.preventDefault(); 
        $('ul.navbar-nav li a').removeClass('active');
        $(this).addClass('active');
    });
});