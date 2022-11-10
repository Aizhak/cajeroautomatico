
var userData = "";
var fondo = 0;
var fondo2 = 0;
var auxResta = 0;

// funcion de Login para 3 usuarios index html
function login (form)
{

switch (form.user.value){
  case 'pedro':
    if (form.pass.value=="1234") {
      var userData = "pedro"
      window.localStorage.setItem("user", userData)
      window.localStorage.setItem(fondo, 800)  
      console.log(fondo)
      location="principal.html";} 
    else {alert("Error de password");
    break;}
    
  case 'sofia':
    if (form.pass.value=="1235") {
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
  break;
}
}

//botonera principal html

fondo2 = parseInt( window.localStorage.getItem(fondo))

function consultar(){

var fondo_actual= document.getElementById("fondo_actual");
fondo_actual.innerHTML = "Actualmente tienes:" + fondo2
}

function salir(){
  location="index.html";
  }

function depositar(){
 var cantidad = document.getElementById("cantidad").value
 fondo2 = fondo2 + parseInt (cantidad)
 console.log ("Estoy depositando")

 var fondo_actual= document.getElementById("fondo_actual");
 fondo_actual.innerHTML = "Actualmente tienes:" + fondo2
}

function retirar(){

    var cantidad = document.getElementById("cantidad").value
    auxResta = fondo2 - parseFloat (cantidad)
   if (fondo2-(parseFloat (cantidad))<= 0){
    var fondo_actual= document.getElementById("fondo_actual");
   fondo_actual.innerHTML = "no tienes saldo suficiente"
   }else{
    fondo2 = fondo2 - parseFloat (cantidad)
    console.log ("Estoy retirando")  
    var fondo_actual= document.getElementById("fondo_actual");
    fondo_actual.innerHTML = "Actualmente tienes:" + fondo2}
}



