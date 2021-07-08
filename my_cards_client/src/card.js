class Card{

    
    static all = []
    static showCard = document.querySelector("#card-container")

    constructor(id, name, image, team, category_id){
        this.id = id 
        this.name = name 
        this.image = image
        this.team = team 
        this.category_id = category_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `card-${this.id}`
        // this.element.addEventListener('click', this.handleCreateCard)
        // this.element.addEventListener('click', this.handleClickDelete)

        Card.all.push(this)
    }

    cardHTML(){       
        this.element.innerHTML += `            
            <div>
                <img src='${this.image}' width = 150px />
                <h3>${this.name}</h3>
                <h3>${this.team}</h3>
            </div>`

            return this.element
    }

    displayCards(){
        debugger;
        Card.showCard.appendChild(this.cardHTML())
    }

    static displayCardForm(){
        cardForm.innerHTML = `<div id="card_form-container">
        <label for="name">Name:</label>
        <input type="text" id="name">
        <label for="image">Image:</label>
        <input type="text" id="image">
        <label for="team">Team:</label>
        <input type="text" id="team">
        <label for="sport">Sport:</label>
        <select name="sport" id="sport">
            <option selected disabled hidden>Select Sport</option>
            <option value="basketball">Basketball</option>
            <option value="baseball">Baseball</option>
            <option value="football">Football</option>
            <option value="hockey">Hockey</option>
        </select>
        <input type="submit" value="Add A Card"
        >
    </div>`
    }



}