class Category{

    static all =[]
    static sportsCard = document.querySelector("#category-container")
    
    constructor({id, sport}){
        this.id = id 
        this.sport = sport

        this.element = document.createElement('ul')
        this.element.dataset.id = this.id 
        thie.element.id = `category-${this.id}`

        Category.all.push(this)
    }


}