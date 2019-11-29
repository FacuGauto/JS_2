var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var parcial_2;
(function (parcial_2) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(nombre, apellido, edad, legajo) {
            var _this = _super.call(this, nombre, apellido, edad) || this;
            _this.legajo = legajo;
            return _this;
        }
        return Alumno;
    }(parcial_2.Persona));
    parcial_2.Alumno = Alumno;
})(parcial_2 || (parcial_2 = {}));
