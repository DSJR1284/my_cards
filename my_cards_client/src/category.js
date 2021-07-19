class Category{
    
    static sportsCard = document.querySelector("#category-container")
    
    constructor({id, sport}){
        this.id = id 
        this.sport = sport 
        
        this.sport = document.createElement('div')
        Category.all(this)
    }

}