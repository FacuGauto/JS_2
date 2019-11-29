var parcial_2;
(function (parcial_2) {
    console.log('LOGICAAA');
    var listaPersonas = new Array();
    function agregar() {
        //let id = $("#id").val().toString();
        var nombre = $("#nombre").val().toString();
        var apellido = $("#apellido").val().toString();
        var edad = parseInt($("#edad").val().toString());
        var legajo = $("#legajo").val().toString();
        var alumnoUno = new parcial_2.Alumno(nombre, apellido, edad, legajo);
        alumnoUno.saluda();
        listaPersonas.push(alumnoUno);
        //console.log(listaPersonas);
        //let a = $("#id");
        //console.log(a);
        var tr = document.createElement("tr");
        var tdNombre = document.createElement("td");
        var textNodeNombre = document.createTextNode(alumnoUno.nombre);
        tdNombre.appendChild(textNodeNombre);
        var tdApellido = document.createElement("td");
        var textNodeApellido = document.createTextNode(alumnoUno.apellido);
        tdApellido.appendChild(textNodeApellido);
        var tdEdad = document.createElement("td");
        var textNodeEdad = document.createTextNode(alumnoUno.edad.toString());
        tdEdad.appendChild(textNodeEdad);
        var tdLegajo = document.createElement("td");
        var textNodeLegajo = document.createTextNode(alumnoUno.legajo);
        tdLegajo.appendChild(textNodeLegajo);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdEdad);
        tr.appendChild(tdLegajo);
        var table = document.getElementById('table');
        table.appendChild(tr);
    }
    parcial_2.agregar = agregar;
    function limpiarForm() {
        $("#nombre").val("");
        $("#apellido").val("");
        $("#edad").val("");
        $("#legajo").val("");
    }
    function eliminar() {
        console.log("Eñimiar");
        $("#table").remove();
    }
    parcial_2.eliminar = eliminar;
})(parcial_2 || (parcial_2 = {}));
