var Personas;
(function (Personas) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
        Persona.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        return Persona;
    }());
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
