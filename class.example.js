// 


function Animal(name){
    this.name=name
    this.speak=function(){
        console.log(`${this.name} speaking`);
        
    }
}
const rexi=new Animal('Rexi')
rexi.speak()