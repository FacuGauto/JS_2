namespace Personas{
    export class Profesor extends Persona{
        public cuil:string;
        constructor(nombre:string,apellido:string,cuil:string){
            super(nombre,apellido);
            this.cuil = cuil;
        }
    }
}
