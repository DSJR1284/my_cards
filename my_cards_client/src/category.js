class Category{
    
    static all = []
    static sportsCard = document.querySelector("#category-container")
    
    constructor({id, sport}){
        this.id = id 
        this.sport = sport 
        
        this.element = document.createElement('p')
        Category.all.push(this)
    }

    categoryHTML(){       
        this.element.innerHTML += 
        `
        <p><a href="http://localhost:3000/categories/hockey">Test</a></p>
        <br>
            `            
            return this.element
    }

    displaySports(){        
        Category.sportsCard.append(this.categoryHTML())
    }

}