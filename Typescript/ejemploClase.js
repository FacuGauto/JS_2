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
var animales;
(function (animales) {
    function makeSound() {
        var miPerro = new animales.Dog("Perrin");
        var miGato = new animales.Cat("Gato");
        miPerro.makeSound();
        miGato.makeSound();
        var lista = new Array();
        lista.push(miPerro);
        lista.push(miGato);
        lista.forEach(function (animal) {
            animal.makeSound();
        });
    }
    animales.makeSound = makeSound;
})(animales || (animales = {}));
