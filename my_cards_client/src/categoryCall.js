class CategoryCall{
    
    constructor(endpoint){
        this.endpoint = endpoint 
    }

    getSports(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())
        .then(category => {category})
    }

//     getCardList(){
//         fetch(`${this.endpoint}/categories/${id}`)
//         .then(resp => resp.json())
//         .then(category => {debugger;})
//     }
// }