namespace parcial_2{
    export class Profesor extends Persona{
        public cuil:number;
        constructor(nombre:string,apellido:string,edad:number,cuil:number){
            super(nombre,apellido,edad);
            this.cuil = cuil;
        }
    }
}