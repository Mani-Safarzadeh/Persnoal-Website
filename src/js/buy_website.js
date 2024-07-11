const btnScrollToBottom = document.querySelector('#btn-scroll-to-bottom')
const sectionHeader = document.querySelector('#section-header')
const websiteDescription = document.querySelector('#website-description')
const inputContainer = document.querySelector('#input-container')
const phoneNumberInput = document.querySelector('#section-phone-number')
const btnSubmit = document.querySelector('#submit-website-form')
const uploadFileButton = document.querySelector('#drop-box button')
const uploadFileInput = document.querySelector('#drop-box input')
const fileTitle = document.querySelector('#file-title')
let filename;

function uploadFile () {
    uploadFileInput.click()
}

uploadFileButton.addEventListener('click', uploadFile)

uploadFileInput.onchange = function (event) {
    filename = event.target.files[0].name
    fileTitle.innerHTML = filename
    uploadFileButton.innerHTML = 'ثبت فایل'
    uploadFileButton.removeEventListener('click', uploadFile)
    sendButton = uploadFileButton
    sendButton.addEventListener('click', function () {
        console.log('radman do your job')
    })
}

btnScrollToBottom.onclick = function () {
    sectionHeight = window.getComputedStyle(sectionHeader).getPropertyValue('height')
    scrollValue =  Number(sectionHeight.substring(0, sectionHeight.length-2))
    document.body.scrollTop = scrollValue; // For Safari
    document.documentElement.scrollTop = scrollValue; // For Chrome, Firefox, IE and Opera
}

window.onload = function () {
    websiteDescription.value = ''
    deviceWidth = window.getComputedStyle(document.body).getPropertyValue('width')
    deviceWidth = Number(deviceWidth.substring(0, deviceWidth.length-2))
    if (deviceWidth > 639) {
        inputContainer.appendChild(btnSubmit)
        btnSubmit.classList.add('sm:w-full')
    } else {
        btnSubmit.classList.remove('sm:w-full')
    }
}

