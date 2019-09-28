var nombre = "Facundo";
nombre = 1234;

if(nombre == 1234)
{
    alert("True");
}else{
    alert("False");
}
function sumar(num1,num2)
{
    alert(num1+num2);
}
function mostrar(){
    alert("FUNCION MOSTRAR");
    var imputUsr = document.getElementById("usr");
    var imputPass = document.getElementById("pass");
    console.log(imputUsr.value);
    console.log(imputPass.value);
}