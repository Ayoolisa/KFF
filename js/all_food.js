let searchForm = document.querySelector('.navbar .search-form');

document.querySelector('#search_btn').onclick = () => {
    searchForm.classList.toggle('active');
};

window.onscroll = () => {
    searchForm.classList.remove('active');
};
