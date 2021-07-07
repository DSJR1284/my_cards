class CardCall{
    
    constructor(endpoint){
        this.endpoint = endpoint 
    }

    getCards(){
        fetch(`${this.endpoint}/cards`)
        .then(resp => resp.json())
        .then(cards =>{ 
            for (const card of cards){
                const c = new Card(card)
                c.displayCards()
            }            
        })
    }
    
    createCard(){
        const card = {
            name: document.getElementById('name').value, 
            image: document.getElementById('image').value,  
            team: document.getElementById('team').value,
            category_id: 1
        }
    }

}