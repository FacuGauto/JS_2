namespace Personas{
    export class Persona{
        public nombre:string;
        public apellido:string;
        constructor(nombre:string,apellido:string){
            this.nombre = nombre;
            this.apellido = apellido;
        }
        public setNombre(nombre:string){
            this.nombre = nombre;
        }
        public getNombre(){
            return this.nombre;
        }

    }
}
