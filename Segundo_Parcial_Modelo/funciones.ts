namespace Personas{
    console.log("ASASAS");
    var lista:Array<Persona> = new Array<Persona>();
    console.log(lista);
    export function agregar():void{
        console.log("Agregar");
        
        let nombre:string = String($("#nombre").val());
        let personaUno:Persona = new Persona("Facundo","Gauto");
        lista.push(personaUno);
        
        console.log(lista);






        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdapellido = document.createElement("td");
        let nombreTd = document.createTextNode(personaUno.nombre);
        let apellidoTd = document.createTextNode(personaUno.apellido);
        tdNombre.appendChild(nombreTd);
        tdapellido.appendChild(apellidoTd);
        tr.appendChild(tdNombre);
        tr.appendChild(tdapellido);
        /*lista.push(new Persona());
        var tr = document.createElement("tr");
        //.....*/
        $("table").append(tr);
    }
    export function elimminar():void{
        
    }
    export function filtrar():void{
        
    }
}
