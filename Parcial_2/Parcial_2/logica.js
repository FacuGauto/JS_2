var parcial_2;
(function (parcial_2) {
    var listaVehiculos = new Array();
    function agregar() {
        var id = calcularId();
        var marca = $("#marca").val().toString();
        var modelo = $("#modelo").val().toString();
        var precio = parseInt($("#precio").val().toString());
        var VehiculoInstancia = new parcial_2.Vehiculo(id, marca, modelo, precio);
        listaVehiculos.push(VehiculoInstancia);
        $("#marca").val("");
        $("#modelo").val("");
        $("#precio").val("");
    }
    parcial_2.agregar = agregar;
    function calcularId() {
        var id = listaVehiculos.reduce(function (older, item) {
            if (older < item.id) {
                return item.id;
            }
            else {
                return older;
            }
        }, 0);
        return id + 1;
    }
    parcial_2.calcularId = calcularId;
    function cargarTabla() {
        $('#table td').remove();
        listaVehiculos.forEach(function (element) {
            cargarDatos(element);
        });
    }
    parcial_2.cargarTabla = cargarTabla;
    function calcular() {
        var sumatoria = listaVehiculos.reduce(function (total, item, indice) {
            return total + item.precio;
        }, 0);
        var promedio = sumatoria / listaVehiculos.length;
        console.log("El promedio de los precios de los vehiculos es: " + promedio);
        alert("El promedio de los precios de los vehiculos es: " + promedio);
        return promedio;
    }
    parcial_2.calcular = calcular;
    function filtrado() {
        //    document.getElementById('marca').addEventListener()
        $("#marca").keypress(function () {
            //$("span").text(i += 1);
            console.log("Un");
        });
    }
    parcial_2.filtrado = filtrado;
    function generarSelect() {
        var arrayMoldelos = listaVehiculos.map(function (element) {
            return element.marca;
        });
        var select = document.createElement("select");
        select.setAttribute('class', 'form-control');
        var arrayfinal = arrayMoldelos.filter(function (element, indiceActual, arreglo) {
            var indiceAlBuscar = arreglo.indexOf(element);
            if (indiceActual === indiceAlBuscar) {
                return true;
            }
            else {
                return false;
            }
        });
        arrayfinal.forEach(function (element) {
            var option = document.createElement("option");
            var textNodeoption = document.createTextNode(element);
            option.appendChild(textNodeoption);
            select.appendChild(option);
        });
        var divOption = $('#option');
        divOption.append(select);
    }
    parcial_2.generarSelect = generarSelect;
    function cargarDatos(vehiculo) {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var textNodeId = document.createTextNode(vehiculo.id.toString());
        tdId.appendChild(textNodeId);
        var tdMarca = document.createElement("td");
        var textNodeMarca = document.createTextNode(vehiculo.marca);
        tdMarca.appendChild(textNodeMarca);
        var tdModelo = document.createElement("td");
        var textNodeModelo = document.createTextNode(vehiculo.modelo);
        tdModelo.appendChild(textNodeModelo);
        var tdPrecio = document.createElement("td");
        var textNodePrecio = document.createTextNode(vehiculo.precio.toString());
        tdPrecio.appendChild(textNodePrecio);
        tr.appendChild(tdId);
        tr.appendChild(tdMarca);
        tr.appendChild(tdModelo);
        tr.appendChild(tdPrecio);
        var table = $('#table');
        table.append(tr);
    }
    parcial_2.cargarDatos = cargarDatos;
    function agregarFormulario() {
        document.getElementById('botones').removeAttribute('hidden');
    }
    parcial_2.agregarFormulario = agregarFormulario;
})(parcial_2 || (parcial_2 = {}));
