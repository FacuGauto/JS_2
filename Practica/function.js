var animales;
(function (animales) {
    var listaPerros = new Array();
    function ejecutar() {
        var miPerro = new animales.Dog("Perrin");
        miPerro.makeSound();
        listaPerros.push(miPerro);
        console.log(listaPerros);
    }
    animales.ejecutar = ejecutar;
})(animales || (animales = {}));
