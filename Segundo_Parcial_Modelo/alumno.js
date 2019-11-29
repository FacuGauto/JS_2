var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Personas;
(function (Personas) {
    var Alumno = (function (_super) {
        __extends(Alumno, _super);
        function Alumno(nombre, apellido, legajo) {
            _super.call(this, nombre, apellido);
            this.legajo = legajo;
        }
        return Alumno;
    })(Personas.Persona);
    Personas.Alumno = Alumno;
})(Personas || (Personas = {}));
