class Card{

    
    static all = []
    static showCard = document.querySelector("#card-container")
    static cardForm = document.querySelector("#form-container")

    constructor({id, name, image, team, category_id}){
        this.id = id 
        this.name = name 
        this.image = image
        this.team = team 
        this.category_id = category_id
        

        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `card-${this.id}`
        this.element.addEventListener('click', this.deleteCard)
        Card.all.push(this)
    }

    cardHTML(){       
        this.element.innerHTML += `            
            <div class="flip-card"> 
                <div class="flip-card-inner">
                    <div class="flip-card-front">      
                <img src='${this.image}'/>
            </div>
            <div class="flip-card-back">
                <h3>${this.name}</h3>
                <h3>${this.team}</h3>            
                <button id="delete-btn">Remove Card</button> 
                </div>
                </div>          
                </div> <br> <br>
            `
            return this.element
    }

    displayCards(){        
        Card.showCard.append(this.cardHTML())
    }

    static displayCardForm(){
        cardForm.innerHTML = `
        <form id="card_form-container">
            <label for="name">Name:</label>
            <input type="text" id="name">
            <label for="image">Image:</label>
            <input type="text" id="image">
            <label for="team">Team:</label>
            <input type="text" id="team">
            <label for="sport">Sport:</label>
            <select name="sport" id="sport">
                <option selected disabled hidden>Select Sport</option>
                <option id="category_id" value="football">FootBall</option>
                <option id="category_id" value="basketball">Basketball</option>
                <option id="category_id" value="baseball">Baseball</option>
                <option id="category_id" value="hockey">Hockey</option>
            </select>            
                <input type="submit" id="create" value="Add A Card">
        </form>`
    }

    deleteCard = () => {
            if (event.target.innerText === 'Remove Card'){
            this.element.remove()
            cardCall.deleteCard(this.id)
        }
    }
}