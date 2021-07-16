class CategoryCall{
    
    constructor(endpoint){
        this.endpoint = endpoint 
    }

    getSports(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())      
        .then(category => {
            if (category[0] === "football"){
                console.log(category[0])
            }
        } )
    }
    

    sportsLink(){

    }

 }