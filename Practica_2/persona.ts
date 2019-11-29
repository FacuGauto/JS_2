namespace parcial_2{
    export class Persona{
        public nombre:string;
        public apellido:string;
        public edad:number;
        constructor(nombre:string,apellido:string,edad:number){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        saluda(){
            console.log(`Mi nombre es: ${this.nombre}, mi apellido: ${this.apellido} y tengo ${this.edad} años.`);
        }
    }
}