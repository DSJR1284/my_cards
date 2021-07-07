const baseUrl = "http://127.0.0.1:3000"
const categoryCall = new CategoryCall(baseUrl)
const cardCall = new CardCall(baseUrl)
const cardForm = document.querySelector("#form-container")
const showCard = document.querySelector("#card-container")

cardCall.getCards()
Card.displayCardForm()
