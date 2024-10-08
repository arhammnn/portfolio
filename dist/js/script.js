// Navbar-fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
  } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu'); 

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
  } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
  }
});

// Pindahkan posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Alert
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
          method: 'POST',
          body: data,
      })
      .then(() => {
          alert("Pesan berhasil terkirim!");
      });
  });
});
