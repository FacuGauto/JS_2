namespace parcial_2{
    let listaVehiculos:Array<Vehiculo> = new Array<Vehiculo>();
    export function agregar():void{
        let id = calcularId();
        let marca = $("#marca").val().toString();
        let modelo = $("#modelo").val().toString();
        let precio = parseInt($("#precio").val().toString());
        let VehiculoInstancia:Vehiculo = new Vehiculo(id,marca,modelo,precio);
        listaVehiculos.push(VehiculoInstancia);
        $("#marca").val("");
        $("#modelo").val("");
        $("#precio").val("");
    }
    export function calcularId():number{
        let id = listaVehiculos.reduce(function(older:number,item:Vehiculo):number{
            if (older < item.id) {
                return item.id;
            }
            else{
                return older;
            }
        },0);
        return id+1;
    }

    export function cargarTabla():void{
        $('#table td').remove();
        listaVehiculos.forEach(function(element){
            cargarDatos(element);
        });
    }
    export function calcular():number{
        let sumatoria = listaVehiculos.reduce(function(total:number,item:Vehiculo,indice:number){
            return total + item.precio;
        },0);
        let promedio = sumatoria/listaVehiculos.length;
        console.log("El promedio de los precios de los vehiculos es: " + promedio);
        alert("El promedio de los precios de los vehiculos es: " + promedio);
        return promedio
    }
    
    export function filtrado():void{
    //    document.getElementById('marca').addEventListener()
        $("#marca").keypress(function(){
            //$("span").text(i += 1);
            console.log("Un");
        });
    }
    export function generarSelect():void{
        let arrayMoldelos = listaVehiculos.map(function(element) {
           return element.marca; 
        });
        let select = document.createElement("select");
        select.setAttribute('class','form-control');
        let arrayfinal = arrayMoldelos.filter(function(element,indiceActual,arreglo) {
            let indiceAlBuscar = arreglo.indexOf(element);
            if (indiceActual === indiceAlBuscar) {
              return true;
            } else {
            return false;
            }
        });
        arrayfinal.forEach(function(element) {
            let option = document.createElement("option");
            let textNodeoption = document.createTextNode(element);
            option.appendChild(textNodeoption);
            select.appendChild(option);
        });
        let divOption = $('#option');
        divOption.append(select);
    }

    export function cargarDatos(vehiculo:Vehiculo):void{
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let textNodeId = document.createTextNode(vehiculo.id.toString());
        tdId.appendChild(textNodeId);
        let tdMarca = document.createElement("td");
        let textNodeMarca = document.createTextNode(vehiculo.marca);
        tdMarca.appendChild(textNodeMarca);
        let tdModelo = document.createElement("td");
        let textNodeModelo = document.createTextNode(vehiculo.modelo);
        tdModelo.appendChild(textNodeModelo);
        let tdPrecio = document.createElement("td");
        let textNodePrecio = document.createTextNode(vehiculo.precio.toString());
        tdPrecio.appendChild(textNodePrecio);
        tr.appendChild(tdId);
        tr.appendChild(tdMarca);
        tr.appendChild(tdModelo);
        tr.appendChild(tdPrecio);
        let table = $('#table');
        table.append(tr);
    }

    export function agregarFormulario() {
        document.getElementById('botones').removeAttribute('hidden');
    }
}