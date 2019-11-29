namespace parcial_2{
    export class Alumno extends Persona{
        public legajo:string;
        constructor(nombre:string,apellido:string,edad:number,legajo:string){
            super(nombre,apellido,edad);
            this.legajo = legajo;
        }
    }
}