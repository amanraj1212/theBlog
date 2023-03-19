// Due to some MIME cross platform error index.html is unable to connect with js/resp.js 
//You can turn that off from the browser

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')
burger.addEventListener('click',()=>{

    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})