const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Scroll Top
const headerTop = $('.header__topbar')
const headerNav = $('.header__navbar')

window.addEventListener("scroll", scrollFunction)

function scrollFunction() {
    if(document.documentElement.scrollTop > 20){
        headerTop.classList.remove('hide')
        headerNav.classList.add('scroll')
    }else {
        headerTop.classList.remove('hide')
        headerNav.classList.remove('scroll')

    }
}

// Search input
const searchIcon = $('.search-icon')
const searchInput = $('.search-input')

searchIcon.addEventListener('click',function(){
    searchInput.classList.toggle('active')
})


// Overlay
const menuBtn = $('.header__navbar-menu')
const overlayElement = $('.header__menu-overlay')
const headerMenuBody = $('.header__menu-body ')
const closeBtn = $('.header__menu-close ')
menuBtn.onclick = () =>{
    overlayElement.style = 'display: block'
    headerMenuBody.style = 'transform: translateX(0)'
}
closeBtn.onclick = () => {
    overlayElement.style = 'display: none'
    headerMenuBody.style = 'transform: translateX(100%)'
}

