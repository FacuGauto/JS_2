var animales;
(function (animales) {
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.makeSound = function () {
            console.log("Miau!!! " + this.name);
        };
        return Cat;
    }());
    animales.Cat = Cat;
})(animales || (animales = {}));
