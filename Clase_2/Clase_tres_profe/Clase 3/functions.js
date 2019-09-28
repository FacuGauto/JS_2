function save(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;

    var row = "<tr><td>" + name + "</td><td>" + surname + "</td><td><a href='' onclick='borrar(event)'>Borrar</a><a href='' onclick='editar(event)'>Editar</a></td></tr>";

    var button = document.createElement("tr");
        button.innerHTML = row;
    document.getElementById('bodyTable').appendChild(button);
}


function borrar(e){
    e.preventDefault();
    console.log("Borrar");
    console.log(e.target); /*vemos quien produjo ese evento*/
    console.log(e.target.parentNode); /*con esto podemos ver quien es el padre del que produjo el evento de arriba*/
    alert("se ejecuto el evento"); /*con esto logro que despues de ejecutarse el evento no se refresque la pantalla*/
    e.target.parentNode.parentNode.innerHTML=""; /*con esto eliminamos todos los componentes de todos los eventos (se borra la linea de la tabla)*/
}

function editar(e){
    e.preventDefault();
    console.log("Editar");
    console.log(e.target); /*vemos quien produjo ese evento*/
    console.log(e.target.parentNode); /*con esto podemos ver quien es el padre del que produjo el evento de arriba*/
    //alert("se ejecuto el evento"); /*con esto logro que despues de ejecutarse el evento no se refresque la pantalla*/
    console.log(e.target.parentNode.parentNode);
    //e.target.parentNode.parentNode.innerHTML=""; /*con esto eliminamos todos los componentes de todos los eventos (se borra la linea de la tabla)*/
}
/*document.getElementById("dato").className="error";
document.getElementById("otroDato").className="error";
alert("el campo no puede estar vacio");*/
function add(){
    document.getElementById('menu').removeAttribute('hidden');
}
let menu = `
    <div class="container">
        <label for="name" id="lblName">Nombre</label>
        <input type="text" placeholder="Tu nombre" id="name" maxlength="25">
        <label for="surname" id="lblSurname">Apellido</label>
        <input type="text" placeholder="Tu apellido" id="surname" maxlength="10">
        <input type="button" name="save" value="Guardar" id="save" class="button" onclick="save()">
    </div>
`