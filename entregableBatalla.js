var letra=['A','D'];
var palabra=[];
var texto=document.getElementById("pencript");
var mensajeCompleto="";

function cabecera(){
  for(let i=0;i<8;i++){
    palabra[i]=Math.round(Math.random()*(5-1)+1);
    i++;
    palabra[i]=letra[Math.round(Math.random())];
  }
  console.log(palabra);
  encriptar(palabra);
}

function encriptar(palabraArray){
  var mensaje=(document.getElementById("texto")).value;
  console.log(mensaje);
  var mensajeArray=[];
  for(let i=0;i<mensaje.length;i++){
    mensajeArray[i]=mensaje.charAt(i);
  }
 for(var i=0; i<palabraArray.length;i=i+2){
    mensajeArray=encriptadoGeneral(palabraArray[i],palabraArray[i+1],mensajeArray);
    console.log(mensajeArray);
  }

  mensajeCompleto=palabraArray.concat(mensajeArray);
  console.log(mensajeCompleto);
  mensajeCompleto=encriptadoGeneral(3,"D",mensajeCompleto);
  console.log(mensajeCompleto);
  mensajeCompleto=encriptadoGeneral(7,"D",mensajeCompleto);
  console.log(mensajeCompleto);
  mensajeCompleto=encriptadoGeneral(8,"A",mensajeCompleto);
  console.log(mensajeCompleto);

  texto.textContent=mensajeCompleto;
}

function encriptadoGeneral(num , operacion, mensaje){
  if(operacion=="A"){
    for(let i=0;i<mensaje.length;i++){
      if(isNaN(mensaje[i])){
        mensaje[i]=mensaje[i].charCodeAt(0)-num;
      }else{
        mensaje[i]=mensaje[i]-num;
      }
    }
  }else{
    for(let i=0;i<mensaje.length;i++){
      if(isNaN(mensaje[i])){
        mensaje[i]=mensaje[i].charCodeAt(0)+num;
      }else{
        mensaje[i]=mensaje[i]+num;
      }
    }
  }
if(mensaje.length>8){
    for(let i=1;i<9;i=i+2){
      mensaje[i]=String.fromCharCode(mensaje[i]);
    }
  }

  for(let i=8; i<mensaje.length;i++){
      mensaje[i]=String.fromCharCode(mensaje[i]);
  }
  return mensaje;
}
