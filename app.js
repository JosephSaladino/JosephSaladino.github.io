// Smooth scroll to anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

// Toggle the mobile navigation menu
$('.nav-toggle').click(function() {
    $('nav').toggleClass('active');
  });
  
  // Hide the mobile navigation menu when a link is clicked
  $('nav a').click(function() {
    $('nav').removeClass('active');
  });

// Validate the contact form before submission
/*
$('form').submit(function(event) {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
  
    if (name === '' || email === '' || message === '') {
      event.preventDefault();
      alert('Please fill in all fields');
    }
  });
  */
      