let navbar = document.querySelector('.header .navbar');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');
let searchForm = document.querySelector('.navbar .search-form');

document.querySelector('#sign_in_btn').onclick = () => {
  loginForm.classList.toggle('active');
};

document.querySelector('#contact').onclick = () => {
    contactInfo.classList.add('active');
};

document.querySelector('#search_btn').onclick = () => {
    searchForm.classList.toggle('active');
};

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
};

window.onscroll = () => {
  loginForm.classList.remove('active');
  contactInfo.classList.remove('active');
  searchForm.classList.remove('active');
};