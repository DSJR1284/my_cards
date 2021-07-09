class CategoryCall{
    
    constructor(endpoint){
        this.endpoint = endpoint 
    }

    getSports(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())
        .then(category => {debugger;})
    }
    
}