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
 }