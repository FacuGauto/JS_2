function mostrar() {

    var nom = document.getElementById("txtUsuario");
    var pass = document.getElementById("txtPassword");

    if (nom.value == "fede" && pass.value == 1234) {
        alert("Login correcto!");
    }
    else {
        alert("Login incorrecto!");
    }
}