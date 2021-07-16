class Category{

    
    static sportsCard = document.querySelector("#category-container")
    
    constructor({id, sport}){
        this.id = id 
        this.sport = sport 
        
        this.sport = document.createElement('div')
        Category.all(this)
    }

    sportHTML(){
        this.sport.innerHTML += `
            <link class="football"> 
            </link>
            <link class="basketball"> 
            </link>
            <link class="baseball"> 
            </link>
            <link class="hockey"> 
            </link>
            `
    }

    static displaySportsLink(){
        Category.sportsCard.append(this.sportHTML())
    }
}