const baseUrl = "http://127.0.0.1:3000"
const categoryCall = new CategoryCall(baseUrl)
const cardCall = new CardCall(baseUrl)
const cardForm = document.querySelector("#form-container")
const showCard = document.querySelector("#card-container")
const removeCard = document.querySelector("#delete-btn")
const sportsCards = document.querySelector("#category-container")


categoryCall.getSports()

cardCall.getCards()
Card.displayCardForm()
Card.cardForm.addEventListener('submit', addACard)

function addACard(){
    cardCall.createCard()
}

function displaySports(){
    categoryCall.sportsLink()
}



