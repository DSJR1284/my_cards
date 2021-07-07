class Card{
    
    static all = []

    constructor(id, name, image, team, category_id){
        this.id = id 
        this.name = name 
        this.image = image
        this.team = team 
        this.category_id 

        Card.all.push(this)
    }

    cardHTML(){
        debugger;
        this.element.innerHTML += `
            
            <div>
                <h3>${this.card}</h3>
                <img id="${this.id}" src='${this.image}' width = 150px />
                <h3>${this.team}</h3>
            </div>`
    }

    displayCards(){
        showCard.append(this.cardHTML())

    }

    static displayCardForm(){
        cardForm.innerHTML = `<div id="card_form-container">
        <label for="name">Name:</label>
        <input type="text" id="name">
        <label for="name">Image:</label>
        <input type="text" id="image">
        <label for="sport">Sport:</label>
        <select name="sport" id="sport">
            <option selected disabled hidden>Select Sport</option>
            <option value="basketball">Basketball</option>
            <option value="baseball">Baseball</option>
            <option value="football">Football</option>
            <option value="hockey">Hockey</option>
          </select>
        <label for="team">Team:</label>
        <input type="text" id="team">
        <input type="submit" value="Add A Card"
        >
    </div>`
    }



}