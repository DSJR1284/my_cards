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
        let category_id
        if(document.querySelector("#sport").value === "football"){
            category_id = 1
        } 
        if(document.querySelector("#sport").value === "basketball"){
            category_id = 2
        }
        if(document.querySelector("#sport").value === "baseball"){
            category_id = 3
        }
        if(document.querySelector("#sport").value === "hockey"){
            category_id = 4
        }          
        const card = { 
            name: document.querySelector("#name").value, 
            image: document.querySelector("#image").value,  
            team: document.querySelector("#team").value,
            category_id: category_id            
        }
            
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(card)
        }    

        fetch(`${this.endpoint}/cards`, configObj)
        .then(resp => resp.json())
        .then(card => {
            const c = new Card(card)
            c.displayCards()
        })
    }

    deleteCard(id){
        fetch(`${this.endpoint}/cards/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}