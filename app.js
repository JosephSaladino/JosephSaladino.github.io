// Smooth scroll to anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  function smoothScroll(target, duration) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  

// Toggle the mobile navigation menu
$('.nav-toggle').click(function() {
    $('nav').toggleClass('active');
  });
  
  // Hide the mobile navigation menu when a link is clicked
  $('nav a').click(function() {
    $('nav').removeClass('active');
  });

// Validate the contact form before submission

$('form').submit(function(event) {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
  
    if (name === '' || email === '' || message === '') {
      event.preventDefault();
      alert('Please fill in all fields');
    }
  });
  
      