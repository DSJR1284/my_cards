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
            <div id="football">
                <link href=" ">
            </div> 
            <div id="basketball">
                <link href=" ">
            </div> 
            <div id="baseball">
                <link href=" ">
            </div> 
            <div id="hockey">
                <link href=" ">
            </div> 
            `
    }

    static displaySportsLink(){
        Category.sportsCard.append(this.sportHTML())
    }
}