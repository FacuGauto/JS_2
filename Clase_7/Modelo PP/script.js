window.addEventListener('load', login);

function login(){
    miboton = document.getElementById('btnLogin');
    miboton.addEventListener('click',click_login);
}

function click_login() {
    let http = new XMLHttpRequest();
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let datosLogin = {"email": email,"password": pass};
    http.onreadystatechange = function(){
        console.log("Llego respuesta",http.readyState,http.status);
        if(http.readyState === 4 && http.status === 200){
            console.log("AAAAA");
            console.log(http.response);
            console.log(JSON.parse(http.response));
            var a = JSON.parse(http.response);
            a.forEach(element => {
              console.log(element);  
            });
            /*if(JSON.parse(http.response['autenticado']) === "si"){
                console.log("ESESEE");
            }*/
        }
    }
    //POST
    http.open("POST",`http://localhost:1337/login`);
    //http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send(JSON.stringify(datosLogin));
}