class CategoryCall{
    
    constructor(endpoint){
        this.endpoint = endpoint 
    }

    getSports(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())
        .then(category => {
            for(const category of categories){
                const s = new Catergory(category)
                c.displaySports()
            }
        } )
    }


}