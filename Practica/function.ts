namespace animales{
    let listaPerros:Array<Dog> = new Array<Dog>();
    export function ejecutar():void{
        let miPerro:Dog = new Dog("Perrin");
        miPerro.makeSound();

        listaPerros.push(miPerro);
        
        console.log(listaPerros);

        


    }
    
}