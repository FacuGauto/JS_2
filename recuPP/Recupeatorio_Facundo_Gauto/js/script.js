window.addEventListener("load",getPersonas);
window.addEventListener('load', modificar);


function getPersonas(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        //console.log("Llego respuesta",http.readyState,http.status);
        if(http.readyState === 4 && http.status === 200){
            let container = document.getElementById('lista_personas');
            let lista = JSON.parse(http.responseText);
            //console.log(lista);
            createTable(container,lista);
            
            document.getElementById('spinner').setAttribute('hidden',true);
        }
    }
    //GET
    http.open("GET",`http://localhost:3000/personas`);
    document.getElementById('spinner').removeAttribute('hidden');
    http.send();
}

function createTable(div_container,lista) {
    let table = document.createElement("table");
    //let col = Object.keys(lista[0]);
    let tr = table.insertRow(-1);
    let col = ["id","nombre","apellido","localidad","sexo"]

    col.forEach(function(element){
        let th = document.createElement("th");
        let nodetexto = document.createTextNode(element.toUpperCase());
        th.appendChild(nodetexto);
        tr.appendChild(th);
    });

    lista.forEach(function(element_lista){
        tr = table.insertRow(-1);
        col.forEach(function(element_col){
            let celda = tr.insertCell(-1);
            let nodetexto = document.createTextNode(element_lista[element_col]);
            if (element_col == "localidad") {
                nodetexto = document.createTextNode(element_lista[element_col]["nombre"]);
            }
            celda.appendChild(nodetexto);
        });
        tr.addEventListener('dblclick', dobleClick);
    });
    div_container.appendChild(table);
}

function getProvincias(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(http.readyState === 4 && http.status === 200){
            let listaProvincias = JSON.parse(http.responseText);
            console.log(listaProvincias);
            let select = document.getElementById("slctPcias");
            listaProvincias.forEach(function(item){
                let op = document.createElement('option');
                op.textContent = item['nombre'];
                op.value = item["id"];
                select.appendChild(op);
               console.log(op); 
            });
            select.addEventListener("change",getLocalidades);
        }
    }
    //GET
    http.open("GET",`http://localhost:3000/provincias`);
    http.send();
}

function dobleClick(e)
{
    let fila = Array.from(e.target.parentNode.children);
    let input_nombre = document.getElementById('txtNombre');
    let input_apellido = document.getElementById('txtApellido');
    let input_id = document.getElementById('txtId');
    let radio_male = document.getElementById('radioBtnMale');
    let radio_female = document.getElementById('radioBtnFemale');
    radio_female.checked = false;
    radio_male.checked = false;
    getProvincias();
    input_id.value = fila[0].textContent;
    input_nombre.value = fila[1].textContent;
    input_apellido.value = fila[2].textContent;
    if (fila[4].textContent == "Male") {
        radio_male.checked = true;
    }
    else if(fila[4].textContent == "Female")
    {
        radio_female.checked = true;
    }
}

function getLocalidades(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(http.readyState === 4 && http.status === 200){
            let listaLocalidad = JSON.parse(http.responseText);
            let select = document.getElementById("slctLcds");
            select.innerHTML = "";
            listaLocalidad.forEach(function(item){
                let op = document.createElement('option');
                op.textContent = item['nombre'];
                op.value = item["id"];
                select.appendChild(op);
            });
        }
    }
    //GET
    let idProv = document.getElementById("slctPcias").value;
    http.open("GET",`http://localhost:3000/localidades?idProv=${idProv}`);
    http.send();
}

function modificar(){
    let http = new XMLHttpRequest();
    miboton = document.getElementById('btnModificar');
    miboton.addEventListener('click',function(){
        let id = document.getElementById('txtId').value;
        let nombre = document.getElementById('txtNombre').value;
        let apellido = document.getElementById('txtApellido').value;
        let sexo;
        let localidad_id = document.getElementById('slctLcds').value;
        let localidad_nombre = document.getElementById('slctLcds').options[document.getElementById('slctLcds').options.selectedIndex].textContent;
        
        if (document.getElementById('radioBtnMale').checked == true) {
            sexo = document.getElementById('radioBtnMale').value;
        }
        else if(document.getElementById('radioBtnFemale').checked == true)
        {
            sexo = document.getElementById('radioBtnFemale').value;
        }
        let persona = {
            "id": id,
            "nombre": nombre,
            "apellido": apellido,
            "sexo": sexo,
            "localidad": {
                "id": localidad_id, "nombre": localidad_nombre
            }
        }
        if(Validar(nombre) && Validar(apellido)){
            http.onreadystatechange = function(){
            if(http.readyState === 4 && http.status === 200){
                console.log('Entro');
                document.getElementById('spinner').setAttribute('hidden',true);
                document.getElementById('lista_personas').innerHTML = "";
                getPersonas();
                }
            }
            //POST
            http.open("POST",`http://localhost:3000/editar`);
            document.getElementById('spinner').removeAttribute('hidden');
            http.setRequestHeader("Content-Type","application/json");
            http.send(JSON.stringify(persona));
        }
        else{
            console.log("ERROR");
        }
    })
}

function Validar(elemento){
    if(elemento == "" || elemento.length < 3)
    {
        return false;        
    }
    else    
    {
        return true;
    }
}