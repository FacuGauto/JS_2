window.addEventListener('load', enviar);

function enviar(){
    let http = new XMLHttpRequest();
    miboton = document.getElementById('btnJson');
    miboton.addEventListener('click',function(){
        http.onreadystatechange = function(){
            //console.log("Llego respuesta",http.readyState,http.status);
            if(http.readyState === 4 && http.status === 200){
                let container = document.getElementById('tabla-lista');         
                let lista = JSON.parse(http.responseText);
                createTable(container,lista);
            }
        }
        //GET
        http.open("GET",`http://localhost:3000/personas`);
        http.send();
    })

}
        
function createTable(div_container,lista) {
    let table = document.createElement("table");
    let col = Object.keys(lista[0]);
    let tr = table.insertRow(-1);

    col.forEach(element => {
        let th = document.createElement("th");
        let nodetexto = document.createTextNode(element.toUpperCase());
        th.appendChild(nodetexto);
        tr.appendChild(th);
    });

    lista.forEach(element_lista => {
        tr = table.insertRow(-1);
        col.forEach(element_col => {
            let celda = tr.insertCell(-1);
            let nodetexto = document.createTextNode(element_lista[element_col]);
            celda.appendChild(nodetexto);
        });
    });
    div_container.appendChild(table);
}