class Category{
    
    static all = []
    static sportsCard = document.querySelector("#category-container")
    
    constructor({id, sport}){
        this.id = id 
        this.sport = sport 
        
        this.element = document.createElement('div')
        this.element.id = `category -${this.id}`
        this.element.addEventListener('click', this.categoryHTML)
        Category.all.push(this)
    }
    // Grab the category from the div 
    // Match the category to the cards 
    // then display the cards
    categoryHTML(){ 
        this.element.innerHTML = ""      
        this.element.innerHTML += 
        `
        <div data-id="${this.id}"       
        <p><a href="">${this.sport}</a></p>
        <br>       
    </div>  
            `            
            return this.element
    }

    displaySports(){        
        Category.sportsCard.append(this.categoryHTML())
    }

}