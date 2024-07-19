const btnOpenModal = document.querySelector('#change-sort-type')
const modal = document.querySelector('#modal')
const btnCloseModal = document.querySelector('#close-modal')
const modalBoxItems = document.querySelectorAll('.modal-item')
function setSearchType (event) {
    modalBoxItems.forEach(function (item) {
        item.classList.remove('text-white')
        item.classList.remove('bg-#3C6E71')
        item.classList.add('text-#353535')
        item.classList.add('bg-white')
    })
    event.target.classList.remove('bg-white')
    event.target.classList.remove('text-#353535')
    event.target.classList.add('bg-#3C6E71')
    event.target.classList.add('text-white')
    btnOpenModal.children[1].innerHTML = event.target.innerHTML
    closeModal()
}

function openModal () {
    modal.classList.remove('-top-75')
    modal.classList.add('top-1/2')
    document.body.classList.add('modal-active')
}
function closeModal () {
    modal.classList.remove('top-1/2')
    modal.classList.add('-top-75')
    document.body.classList.remove('modal-active')
}

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)

modalBoxItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        setSearchType(event)
    })
})