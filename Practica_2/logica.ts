namespace parcial_2{
    console.log('LOGICAAA');
    let listaPersonas:Array<Persona> = new Array<Persona>();
    export function agregar():void{
        //let id = $("#id").val().toString();
        let nombre = $("#nombre").val().toString();
        let apellido = $("#apellido").val().toString();
        let edad = parseInt($("#edad").val().toString());
        let legajo = $("#legajo").val().toString();
        let alumnoUno:Alumno = new Alumno(nombre,apellido,edad,legajo);
        alumnoUno.saluda();
        listaPersonas.push(alumnoUno);
        //console.log(listaPersonas);
        //let a = $("#id");
        //console.log(a);
        

        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let textNodeNombre = document.createTextNode(alumnoUno.nombre);
        tdNombre.appendChild(textNodeNombre);
        let tdApellido = document.createElement("td");
        let textNodeApellido = document.createTextNode(alumnoUno.apellido);
        tdApellido.appendChild(textNodeApellido);
        let tdEdad = document.createElement("td");
        let textNodeEdad = document.createTextNode(alumnoUno.edad.toString());
        tdEdad.appendChild(textNodeEdad);
        let tdLegajo = document.createElement("td");
        let textNodeLegajo = document.createTextNode(alumnoUno.legajo);
        tdLegajo.appendChild(textNodeLegajo);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdEdad);
        tr.appendChild(tdLegajo);
        let table = document.getElementById('table');
        table.appendChild(tr);

    }

    function limpiarForm():void
    {
      $("#nombre").val("");
      $("#apellido").val("");
      $("#edad").val("");
      $("#legajo").val("");
    }

    export function eliminar():void{
        console.log("Eñimiar");
        $("#table").remove();
    }
}