class CategoryCall{
    
    constructor(endpoint){
        this.endpoint = endpoint 
    }

    getSports(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())      
        .then(categories => {
            for (const category of categories){
                const s = new Category(category)
                s.displaySports()
            }
        }        
    )}

    showCards(){
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(card)
        }    
    
        fetch(`${this.endpoint}/category/${id}`, configObj)
        .then(resp => resp.json())
        .then(cards => {
            for (const card of cards){
                debugger;
                const s = new Card(card)
                s.displayCards()
            }
        })
    }
    
    
 }