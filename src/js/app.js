$ = document

const navMenu = $.querySelector('#nav-menu')
const btnMenu = $.querySelector('#btn-menu')
const closeMenu = $.querySelector('#close-menu')
const btnOpenModal = $.querySelector('#change-sort-type')
const modal = $.querySelector('#modal')
const btnCloseModal = $.querySelector('#close-modal')
const modalBoxItems = $.querySelectorAll('.modal-item')


function setSearchType (event) {
    modalBoxItems.forEach(function (item) {
        item.classList.remove('text-white')
        item.classList.remove('bg-blue-600')
        item.classList.add('text-black')
        item.classList.add('bg-white')
    })
    event.target.classList.remove('bg-white')
    event.target.classList.remove('text-black')
    event.target.classList.add('bg-blue-600')
    event.target.classList.add('text-white')
    btnOpenModal.children[1].innerHTML = event.target.innerHTML
    closeModal()
}

function openModal () {
    modal.classList.remove('-top-75')
    modal.classList.add('top-1/4')
}
function closeModal () {
    modal.classList.remove('top-1/4')
    modal.classList.add('-top-75')
}

btnMenu.addEventListener('click', function () {
    navMenu.classList.add('right-0')
    navMenu.classList.remove('-right-48')
})
closeMenu.addEventListener('click', function () {
    navMenu.classList.add('-right-48')
    navMenu.classList.remove('right-0')
})

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeMenu)

modalBoxItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        setSearchType(event)
    })
})
