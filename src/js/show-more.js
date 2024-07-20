let articles = document.querySelectorAll('.article')
articles = Array.from(articles)
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

}

btnShowMore.onclick = function () {
    showMoreArticles()
}