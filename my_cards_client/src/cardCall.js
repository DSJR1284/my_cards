class CardCall{
    
    constructor(endpoint){
        this.endpoint = endpoint 
    }

    getCards(){
        fetch(`${this.endpoint}/cards`)
        .then(resp => resp.json())
        .then(cards => { 
            for (const card of cards){
                const c = new Card(card)
                c.displayCards()
            }            
        })
    }

    createCard(){
        const card = {
            name: document.getElementBy('name').value, 
            image: document.getElementBy('image').value,  
            team: document.getElementBy('team').value,
            
        }
    }

}