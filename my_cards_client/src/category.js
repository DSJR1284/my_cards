class Categories{

    static all =[]
    
    constructor({id, sport}){
        this.id = id 
        this.sport = sport

        this.element = document.createElement('li')
        this.element.dataset.id = this.id 
        thie.element.id = `category-${this.id}`

            Owner.all.push(this)
    }


    

}