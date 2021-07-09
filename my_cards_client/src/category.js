class Category{

    
    static sportsCard = document.querySelector("#category-container")
    
    constructor({id, sport}){
        this.id = id 
        this.sport = sport       

        Category.all(this)
    }
}