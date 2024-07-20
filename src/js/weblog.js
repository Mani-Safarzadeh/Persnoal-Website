// modal
const modal = document.querySelector('#modal')
const btnOpenModal = document.querySelector('#change-sort-type')
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
    modal.classList.remove('-top-1000')
    modal.classList.add('top-0')
    document.body.classList.add('modal-active')
}
function closeModal () {
    modal.classList.remove('top-0')
    modal.classList.add('-top-1000')
    document.body.classList.remove('modal-active')
}

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)

modalBoxItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        setSearchType(event)
    })
})

// more weblogs button
let articles = [...(document.querySelectorAll('.article'))]
const btnShowMore = document.querySelector('#show-more')
let counter = 8

function checkIfEnded () {
    if (articles.length < (counter - 1)) {
        btnShowMore.classList.add('hidden')
    }
}

function showMoreArticles () {
    articles.slice(counter - 1).forEach(function (article) {
        if (articles.indexOf(article) < (counter + 8)) {
            article.classList.remove('hidden')
            article.classList.add('flex')
        }
    })
    counter += 8
    checkIfEnded()
}

window.onload = function () {   
    checkIfEnded() 
    articles.forEach(function (article) {
        if (articles.indexOf(article) > (counter - 1)) {
            article.classList.remove('flex')
            article.classList.add('hidden')
        }
    })
    if (localStorage.getItem('articles') === null) {
        console.log(JSON.stringify(articles[0]))
    }
}

btnShowMore.onclick = function () {
    showMoreArticles()
}