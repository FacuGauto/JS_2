var Personas;
(function (Personas) {
    console.log("ASASAS");
    var lista = new Array();
    console.log(lista);
    function agregar() {
        console.log("Agregar");
        var nombre = String($("#nombre").val());
        var personaUno = new Personas.Persona("Facundo", "Gauto");
        lista.push(personaUno);
        console.log(lista);
        var tr = document.createElement("tr");
        var tdNombre = document.createElement("td");
        var tdapellido = document.createElement("td");
        var nombreTd = document.createTextNode(personaUno.nombre);
        var apellidoTd = document.createTextNode(personaUno.apellido);
        tdNombre.appendChild(nombreTd);
        tdapellido.appendChild(apellidoTd);
        tr.appendChild(tdNombre);
        tr.appendChild(tdapellido);
        /*lista.push(new Persona());
        var tr = document.createElement("tr");
        //.....*/
        $("table").append(tr);
    }
    Personas.agregar = agregar;
    function elimminar() {
    }
    Personas.elimminar = elimminar;
    function filtrar() {
    }
    Personas.filtrar = filtrar;
})(Personas || (Personas = {}));
