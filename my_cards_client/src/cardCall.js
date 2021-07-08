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
            name: document.querySelector("#name").value, 
            image: document.querySelector("#image").value,  
            team: document.querySelector("#team").value,
            category_id: 1             
        }
        debugger;
        
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(card)
    }

}