const srcs = [
    '../img/slider-1.jpg',
    '../img/slider-2.jpg',
    '../img/slider-3.jpg'
]
const sliderImage = document.querySelector('img[alt="slider-image"]')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
index = 0

function nextImage () {
    index++
    if (index > srcs.length - 1) {
        index = 0
    }
    sliderImage.setAttribute('src', srcs[index])
}

function prevImage () {
    index--
    if (index < 0) {
        index = srcs.length -1
    }
    sliderImage.setAttribute('src', srcs[index])
}

setInterval(nextImage, 4000)

btnNext.onclick = nextImage
btnPrev.onclick = prevImage