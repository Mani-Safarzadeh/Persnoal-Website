const btnScroll = document.querySelector('#btn-scroll-to-bottom')
const sectionHeader = document.querySelector('#section-header')
const inputContainer = document.querySelector('#input-container')
const uploadFileButton = document.querySelector('#drop-box button')
const uploadFileInput = document.querySelector('#drop-box input')
const fileTitle = document.querySelector('#file-title')
let filename;

btnScroll.onclick = function () {
    sectionHeight = window.getComputedStyle(sectionHeader).getPropertyValue('height')
    scrollValue =  Number(sectionHeight.substring(0, sectionHeight.length-2))
    document.body.scrollTop = scrollValue; // For Safari
    document.documentElement.scrollTop = scrollValue; // For Chrome, Firefox, IE and Opera
}

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

