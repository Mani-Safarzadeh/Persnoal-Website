const navbar = document.querySelector('#nav-menu')
const navicon = document.querySelector('#nav-icon')
const navClose = document.querySelector('#nav-close')

navicon.onclick = function () {
    navbar.classList.remove('top-0')
    navbar.classList.add('top-16')
    navicon.parentElement.classList.remove('block')
    navicon.parentElement.classList.add('hidden')
    navClose.parentElement.classList.remove('hidden')
    navClose.parentElement.classList.add('block')
}

navClose.onclick = function () {
    navbar.classList.remove('top-16')
    navbar.classList.add('top-0')
    navicon.parentElement.classList.remove('hidden')
    navicon.parentElement.classList.add('block')
    navClose.parentElement.classList.remove('block')
    navClose.parentElement.classList.add('hidden')
}
window.onscroll = function (event) {
    console.log(event)
}