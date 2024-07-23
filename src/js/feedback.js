const emotes = Array.from(document.querySelectorAll('.emote'))
const feedbackCategories = Array.from(document.querySelectorAll('.feedback-category'))

function clearFeedbackBackgrounds () {
    feedbackCategories.forEach(function (feedbackCategory) {
        feedbackCategory.classList.remove('bg-#353535')
        feedbackCategory.classList.remove('text-white')
        feedbackCategory.classList.add('text-#353535')
        feedbackCategory.classList.add('bg-#D9D9D9')
        feedbackCategory.classList.add('hover:bg-white')
    })
}

function clearEmoteBackgrounds () {
    emotes.forEach(function (emote) {
        emote.classList.remove('bg-green-500')
        emote.classList.remove('bg-lime-500')
        emote.classList.remove('bg-yellow-500')
        emote.classList.remove('bg-orange-500')
        emote.classList.remove('bg-red-500')
    })
}

feedbackCategories.forEach(function (feedbackCategory) {
    feedbackCategory.addEventListener('click', function () {
        clearFeedbackBackgrounds()
        feedbackCategory.classList.add('bg-#353535')
        feedbackCategory.classList.add('text-white')
        feedbackCategory.classList.remove('hover:bg-white')
        feedbackCategory.classList.remove('text-#353535')
        feedbackCategory.classList.remove('bg-#D9D9D9')
    })
})

emotes.forEach(function (emote) {
    emote.addEventListener('click', function () {
        clearEmoteBackgrounds()
        if (emotes.indexOf(emote) === 0) {
            emote.classList.add('bg-green-500')
        } else if (emotes.indexOf(emote) === 1) {
            emote.classList.add('bg-lime-500')
        } else if (emotes.indexOf(emote) === 2) {
            emote.classList.add('bg-yellow-500')
        } else if (emotes.indexOf(emote) === 3) {
            emote.classList.add('bg-orange-500')
        } else {
            emote.classList.add('bg-red-500')
        }
    })
})