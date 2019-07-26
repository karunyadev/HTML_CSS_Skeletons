
window.addEventListener('DOMContentLoaded', init);
let navbar; 

function init() {
  setRefs();
}

window.addEventListener('scroll', function(event) {
  if (window.scrollY > 150) {
    navbar.style.opacity = 0.9;
  } else {
    navbar.style.opacity = 1;
  }
});

// Smooth scrolling for the frontpage 

$('#navbar, a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

function setRefs() {
  navbar = document.querySelector('#navbar');
}
