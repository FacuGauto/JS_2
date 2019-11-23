namespace Personas{
    export class Alumno extends Persona{
        public legajo:string;
        constructor(nombre:string,apellido:string,legajo:string){
            super(nombre,apellido);
            this.legajo = legajo;
        }
    }
}
