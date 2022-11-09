
var userData = "";
var fondo = 0;


//index
//function save_username() {
 // var userData = document.getElementById('user').value
 
//}      

//principal 
//var username = window.localStorage.getItem('user')
//document.getElementById("usuario").innerHTML = username;

// funcion de Login para 3 usuarios
function login (form)
{

switch (form.user.value){
  case 'pedro':
    if (form.pass.value=="1234") {
      var userData = "pedro"
      window.localStorage.setItem("user", userData)
      window.localStorage.setItem(fondo, 800)  
      location="principal.html";} 
    else {alert("Error de password");
    break;}
    
  case 'sofia':
    if (form.pass.value=="1234") {
      var userData = "pedro"
      window.localStorage.setItem("user", userData)
      window.localStorage.setItem(fondo, 200)  
      location="principal.html";} 
    else {alert("Error de password");
  break;}
    

  case 'casimejubilo':
    if (form.pass.value=="1234") {
      var userData = "pedro"
      window.localStorage.setItem("user", userData)
      window.localStorage.setItem(fondo, 300)  
      location="principal.html";} 
  else {alert("Error de password");
  break;}

  default: alert("Error de usuario")
  break;;
}
}

//botonera
function consultar(){
fondo = parseFloat (window.localStorage.getItem(fondo))
var fondo_actual= document.getElementById("fondo_actual");
fondo_actual.innerHTML = "Actualmente tienes:" + fondo

}

function salir(){
  location="index.html";
  }


function depositar(){
 var cantidad = document.getElementById("cantidad").value
 fondo = parseFloat (window.localStorage.getItem(fondo))
 fondo = fondo + parseFloat (cantidad)
 console.log ("Estoy depositando")

 var fondo_actual= document.getElementById("fondo_actual");
 fondo_actual.innerHTML = "Actualmente tienes:" + fondo
}

function retirar(){

    var cantidad = document.getElementById("cantidad").value
    fondo = parseFloat (window.localStorage.getItem(fondo))
  
   if (fondo-(parseFloat (cantidad))<= 0){
    fondo_actual.innerHTML = "no tienes saldo suficiente"
   }
    fondo = fondo - parseFloat (cantidad)
    console.log ("Estoy retirando")  
    var fondo_actual= document.getElementById("fondo_actual");
    fondo_actual.innerHTML = "Actualmente tienes:" + fondo
}



