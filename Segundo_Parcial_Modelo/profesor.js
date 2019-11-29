var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Personas;
(function (Personas) {
    var Profesor = (function (_super) {
        __extends(Profesor, _super);
        function Profesor(nombre, apellido, cuil) {
            _super.call(this, nombre, apellido);
            this.cuil = cuil;
        }
        return Profesor;
    })(Personas.Persona);
    Personas.Profesor = Profesor;
})(Personas || (Personas = {}));
