function chaiAurtea(product,price){
     this.product = product;
     this.price = price;
}

chaiAurtea.prototype.Increment= function(){
        this.price++;
}
chaiAurtea.prototype.printMe=function(){
    console.log(`price is ${this.price}`);
    
}
const tea =new chaiAurtea("tea",25);
const chai =new chaiAurtea("chai",250);
chai.Increment()
chai.printMe()
