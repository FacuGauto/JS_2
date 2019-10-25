window.addEventListener('load', enviar);
window.addEventListener('load', modificar);
window.addEventListener('load', eliminar);


function enviar(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        //console.log("Llego respuesta",http.readyState,http.status);
        if(http.readyState === 4 && http.status === 200){
            let container = document.getElementById('tabla-lista');
            let lista = JSON.parse(http.responseText);
            console.log(lista);
            //createTable(container,lista);
            lista.forEach(function(item){
                let result = createCard(item);
                container.appendChild(result);
            });

            document.getElementById('spinner').setAttribute('hidden',true);
        }
    }
    //GET
    http.open("GET",`http://localhost:3000/personas`);
    document.getElementById('spinner').removeAttribute('hidden');
    http.send();
}

function modificar(){
    let http = new XMLHttpRequest();
    miboton = document.getElementById('btnModificar');
    miboton.addEventListener('click',function(){
        let id = document.getElementById('persona_id').value;
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let sexo;
        //let sexo = document.getElementById('sexo').value;
        //let sexo2 = document.getElementById('sexo').value;
        if (document.getElementById('sexo_male').checked == true) {
            sexo = document.getElementById('sexo_male').value;
        }
        else if(document.getElementById('sexo_female').checked == true)
        {
            sexo = document.getElementById('sexo_female').value;
        }
        http.onreadystatechange = function(){
            if(http.readyState === 4 && http.status === 200){
                console.log('Entro');
                document.getElementById('spinner').setAttribute('hidden',true);
                document.getElementById('tabla-lista').innerHTML = "";
                enviar();
            }
        }
        //POST
        http.open("POST",`http://localhost:3000/editar`);
        document.getElementById('spinner').removeAttribute('hidden');
        http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        http.send(`nombre=${nombre}&apellido=${apellido}&sexo=${sexo}&id=${id}`);
    })
}

function eliminar(){
    let http = new XMLHttpRequest();
    miboton = document.getElementById('btnEliminar');
    miboton.addEventListener('click',function(){
        let id = document.getElementById('persona_id').value;
        http.onreadystatechange = function(){
            if(http.readyState === 4 && http.status === 200){
                console.log('Entro');
                document.getElementById('spinner').setAttribute('hidden',true);
                document.getElementById('tabla-lista').innerHTML = "";
                enviar();
            }
        }
        //POST
        http.open("POST",`http://localhost:3000/eliminar`);
        document.getElementById('spinner').removeAttribute('hidden');
        http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        http.send(`id=${id}`);
    })
}



function createTable(div_container,lista) {
    let table = document.createElement("table");
    let col = Object.keys(lista[0]);
    let tr = table.insertRow(-1);

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
            celda.appendChild(nodetexto);
        });
        tr.addEventListener('dblclick', dobleClick);
    });
    div_container.appendChild(table);
}

function dobleClick(e) {
    let fila = Array.from(e.target.parentNode.children);
    let input_nombre = document.getElementById('nombre');
    let input_apellido = document.getElementById('apellido');
    let input_id = document.getElementById('persona_id');
    let radio_male = document.getElementById('sexo_male');
    let radio_female = document.getElementById('sexo_female');
    radio_female.checked = false;
    radio_male.checked = false;
    
    input_id.value = fila[0].textContent;
    input_nombre.value = fila[1].textContent;
    input_apellido.value = fila[2].textContent;
    if (fila[3].textContent == "Male") {
        radio_male.checked = true;
    }
    else if(fila[3].textContent == "Female")
    {
        radio_female.checked = true;
    }
    console.log(fila[0].textContent);
    /*fila.forEach(function(element){
        console.log(element.textContent);
    });*/
}

function createCard(item) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    img.src = "./img/user.png";
    let userData = document.createElement("div");
    card.appendChild(img);
    card.appendChild(userData);
    for (let key in item) {
        let pItem = document.createElement("p");
        pItem.textContent = item[key];
        userData.appendChild(pItem);
    }
    card.addEventListener('dbclick',dobleClick)
    return card;
}
