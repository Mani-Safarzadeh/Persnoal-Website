const btnScroll = document.querySelector('#btn-scroll-to-bottom')
const sectionHeader = document.querySelector('#section-header')

btnScroll.onclick = function () {
    sectionHeight = window.getComputedStyle(sectionHeader).getPropertyValue('height')
    scrollValue =  Number(sectionHeight.substring(0, sectionHeight.length-2))
    document.body.scrollTop = scrollValue; // For Safari
    document.documentElement.scrollTop = scrollValue; // For Chrome, Firefox, IE and Opera
}
