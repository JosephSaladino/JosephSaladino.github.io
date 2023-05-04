// Smooth scroll to anchor links
$(document).on('click', 'a[href^="#"]', function (smoothScroll) {
  smoothScroll.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 100000);
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


// background animation
const bg = document.getElementById('bg');

function setBgHeight() {
  bg.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', setBgHeight);

setBgHeight();


// Get the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set the initial position and velocity of the circle
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = -2;

// Define the draw function
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  // Update the circle position
  x += dx;
  y += dy;

  // Bounce the circle off the edges of the canvas
  if (x + dx > canvas.width - 10 || x + dx < 10) {
    dx = -dx;
  }
  if (y + dy > canvas.height - 10 || y + dy < 10) {
    dy = -dy;
  }
}

// Define the animate function
function animate() {
  // Draw the circle
  draw();

  // Call the animate function on the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();
  
      