var parcial_2;
(function (parcial_2) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        Persona.prototype.saluda = function () {
            console.log("Mi nombre es: " + this.nombre + ", mi apellido: " + this.apellido + " y tengo " + this.edad + " a\u00F1os.");
        };
        return Persona;
    }());
    parcial_2.Persona = Persona;
})(parcial_2 || (parcial_2 = {}));
