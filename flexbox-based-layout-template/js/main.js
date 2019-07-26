let navbar;
window.addEventListener('DOMContentLoaded', init);

function init() {
  setRefs();
}

window.addEventListener('scroll', function(event) {
  if (window.scrollY > 150) {
    navbar.style.opacity = 0.9;
    navbar.style.backgroundColor = '#fff';
    navbar.style.color = 'black';
    navbar
      .querySelectorAll('ul li a')
      .forEach(link => (link.style.color = '#333'));
  } else {
    navbar.style.opacity = 1;
    navbar.style.backgroundColor = '#333';
    navbar.style.color = 'white';
    navbar
      .querySelectorAll('ul li a')
      .forEach(link => (link.style.color = 'white'));
  }
});

// Smooth scrolling

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
