function add(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var bodyTable = document.getElementById("bodyTable");
    
    bodyTable.innerHTML = bodyTable.innerHTML +
    "<td>" + name + "</td>"+
    "<td>" + surname + "</td>"+
    "<td><a href='' onclick='deleteRowTable(event)'>Borrar</a></td>";
}

function deleteRowTable(e){
    e.preventDefault();//logro que despues de ejecutarse el evento no se refresque la pantalla
    //console.log(e.taget);   //vemos quien produjo ese evento
    //console.log(e.taget.parentNode);    //podemos ver quien es el padre del que produjo el evento de arriba
    alert("se ejecuto el evento"); 
    e.target.parentNode.parentNode.innerHTML=""  //eliminamos todos los componentes de todos los eventos (se borra la linea de la tabla)
}

/*document.getElementById("dato").className="error";
document.getElementById("otroDato").className="error";
alert("el campo no puede estar vacio");*/