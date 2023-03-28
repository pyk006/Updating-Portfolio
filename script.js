const landingButton = document.querySelector('.button__landing');
const navLinks = document.querySelector('.nav__links');
const navBar = document.querySelector('.nav');
const nav = document.querySelector('.nav__bar');
const logoShape = document.querySelector('#logo');
const logoMain = document.querySelector('.logo__main');
const logoLetter = document.querySelector('.st1');
const section1 = document.querySelector('#section-1');
const section2 = document.querySelector('#section-2');
const section3 = document.querySelector('#section-3');
const allSections = document.querySelectorAll('.section');
const header = document.querySelector('.header');
const email = document.querySelector('.email');

//Smooth landing button
landingButton.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Smooth scrolling for nav buttons

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const sectionID = e.target.getAttribute('href');
    document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
});

//at Refresh scroll to top
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
//Logo scroll up button

logoShape.addEventListener('click', function () {
  nav.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    alignToTop: false,
  });
});

// Section popup

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('hidden');
});

//Scroll Nav Bar animation
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 100) {
    $('.nav').addClass('sticky');
  } else {
    $('.nav').removeClass('sticky');
  }
});

//MegaYum button reveal
// const megaYum = document.querySelector('.figma_reveal');
// const figma = document.querySelector('.figma');
// megaYum.addEventListener('click', function () {
//   if (figma.classList.contains('hidden')) {
//     figma.classList.remove('hidden');
//   } else {
//     figma.classList.add('hidden');
//   }
// });

//logo animation loading screen
// let count = 0;
// const mySVG = $('#loader_image').drawsvg();

// function animate() {
//   mySVG.drawsvg('animate');
// }

// mySVG.drawsvg('animate');

// Particles
tsParticles.load('tsparticles-custom', {
  duration: 60,
  particles: {
    move: {
      enable: true,
    },
    color: {
      value: ['#ffbe0b', '#fad15f', '#f8e9bf', '#fd881b', '#fd3d1b'],
    },
    size: {
      value: {
        min: 1,
      },
    },
  },
  fullScreen: {
    enable: false,
  },
});

// Contact form Functionality
// const form = document.getElementById('#contactform');

// if (form != null) form.addEventListener('submit', handleSubmit);

// const handleSubmit = function (event) {
//   if (form != null) event.preventDefault();
//   const formData = new FormData(form);
//   postFormData(formData).then(() => {
//     form.reset();
//     form.classList.toggle('hidden');
//   });
// };

// function postFormData(formData) {
//   return fetch('message.php', {
//     method: 'POST',
//     body: formData,
//   });
// }

//On hover 'Start' appears

const landingStart = document.querySelector('.fa-solid');
const start = document.querySelector('.start');
landingStart.addEventListener('mouseover', () => {
  start.classList.remove('.hidden');
});

//Contact form reveal

const contactbutton = document.querySelector('.contact_reveal');
const formoverlay = document.querySelector('.form_overlay');
contactbutton.addEventListener('click', () => {
  if (!contactbutton.classList.contains('hidden')) {
    contactbutton.classList.add('hidden');
    formoverlay.scrollIntoView({ behavior: 'smooth' });
    formoverlay.classList.remove('hidden');
  }
});

//Profile Image change from cartoon to real

const profile = document.querySelector('.profile');
const profileCartoon = document.querySelector('profile_cartoon');
const profileReal = document.querySelector('profile_real');
profile.addEventListener('click', () => {
  console.log(profileCartoon.classList());
});

// Time delayed 60s CSS change for gradient
