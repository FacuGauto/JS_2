/*interface Animal{
    name:string;
    makeSound():void;
}

class Dog implements Animal{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    makeSound(){
        console.log("Guau!!! " + this.name);
    }
}

class Cat implements Animal{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    makeSound(){
        console.log("Miau!!! " + this.name);
    }
}makeSound
*/
namespace animales{
    export function makeSound():void {
        var miPerro:Dog = new Dog("Perrin");
        var miGato:Cat = new Cat("Gato");
        miPerro.makeSound();
        miGato.makeSound();

        var lista:Array<Animal> = new Array<Animal>();
        lista.push(miPerro);
        lista.push(miGato);

        lista.forEach(function(animal) {
            animal.makeSound();
        });        
    }
    
}
