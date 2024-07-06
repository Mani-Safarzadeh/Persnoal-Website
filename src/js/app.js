window.onload = function  () {
    const navMenu = document.querySelector('#nav-menu')
    const btnMenu = document.querySelector('#btn-menu')
    const closeMenu = document.querySelector('#close-menu')

    btnMenu.addEventListener('click', function () {
        navMenu.classList.add('right-0')
        navMenu.classList.remove('-right-40')
    })
    closeMenu.addEventListener('click', function () {
        navMenu.classList.add('-right-40')
        navMenu.classList.remove('right-0')
    })
}