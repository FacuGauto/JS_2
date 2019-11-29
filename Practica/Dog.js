var animales;
(function (animales) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.makeSound = function () {
            console.log("Guau " + this.name);
        };
        return Dog;
    }());
    animales.Dog = Dog;
})(animales || (animales = {}));
