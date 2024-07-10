const input = document.querySelector('#input-phone')
const btnSumbitPhone = document.querySelector('#btn-sumbit-phone')
let phoneNumber;

btnSumbitPhone.onclick = function () {
    phoneNumber = String(input.value)

    if (phoneNumber.length !== 11 ) {
        alert('شماره باید شامل 11 کارکتر باشد')
        input.value = ''
    } else if (isNaN(Number(phoneNumber))) {
        alert('شماره باید از جنس عدد باشد')
        input.value = ''
    }
    else {
        console.log('passed')
        // radman do the back-end
    }
}