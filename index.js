let mainNav = document.querySelector('#js-menu');
let navBarToggle = document.querySelector('#js-navbar-toggle');
let listNav = document.querySelectorAll('.nav-links');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

for(let nav of listNav) {
  nav.addEventListener('click',function() {
    mainNav.classList.remove('active')
  });
}




var goTopButton = document.getElementById("goTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}