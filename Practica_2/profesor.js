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
    var Profesor = /** @class */ (function (_super) {
        __extends(Profesor, _super);
        function Profesor(nombre, apellido, edad, cuil) {
            var _this = _super.call(this, nombre, apellido, edad) || this;
            _this.cuil = cuil;
            return _this;
        }
        return Profesor;
    }(parcial_2.Persona));
    parcial_2.Profesor = Profesor;
})(parcial_2 || (parcial_2 = {}));
