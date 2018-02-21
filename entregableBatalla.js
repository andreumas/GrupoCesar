var letra=['A','D'];
var palabra=[];
var texto=document.getElementById("pencript");
var mensajeCompleto="";

/*Se ejecuta al hacer click en el botón enviar
Crea una cabecera aleatoria que se le añade al mensaje e indica el cifrado
interno que afectará al mensaje*/
function cabecera(){
  for(let i=0;i<8;i++){
    palabra[i]=Math.round(Math.random()*(5-1)+1);
    i++;
    palabra[i]=letra[Math.round(Math.random())];
  }
  //Lanza la función encriptar
  encriptar(palabra);
}
/*Encripta el mensaje que recibe de la caja de texto.
Crea un array con el mensaje y encripta, carácter a carácter, cada uno de
los valores de este.*/

function encriptar(palabraArray){
  var mensaje=(document.getElementById("texto")).value;
  var mensajeArray=[];
  for(let i=0;i<mensaje.length;i++){
    mensajeArray[i]=mensaje.charAt(i);
  }
 for(let i=0; i<palabraArray.length;i=i+2){
    mensajeArray=encriptadoGeneral(palabraArray[i],palabraArray[i+1],mensajeArray);
  }

  mensajeCompleto=palabraArray.concat(mensajeArray);
  mensajeCompleto=encriptadoGeneral(3,"D",mensajeCompleto);
  mensajeCompleto=encriptadoGeneral(7,"D",mensajeCompleto);
  mensajeCompleto=encriptadoGeneral(8,"A",mensajeCompleto);

  for(let i=8;i<mensaje.length+8;i++){
    console.log(mensaje.charAt(i-8)==" ");
    console.log(mensaje.length);
    if(mensaje.charAt(i-8)==" "){
      mensajeCompleto[i]=" ";
    }
  }
  texto.textContent=mensajeCompleto;
}

/*Dados un numero, una operacion, y un mensaje encripta la palabra moviendo
 tantas veces como num, en la dirección marcada por la operación,
respecto al mensaje.*/
function encriptadoGeneral(num , operacion, mensaje){
  if(operacion=="A"){
    for(let i=0;i<mensaje.length;i++){
      if(isNaN(mensaje[i])){
        if((mensaje[i].charCodeAt(0)-num)<31){
          let exceso=31-(mensaje[i].charCodeAt(0)-num);
          mensaje[i]=125-exceso;
        }else{
          mensaje[i]=mensaje[i].charCodeAt(0)-num;
      }
    }else{
        mensaje[i]=mensaje[i]-num;
    }
  }
}else{
    for(let i=0;i<mensaje.length;i++){
      if(isNaN(mensaje[i])){
        if(125<(mensaje[i].charCodeAt(0)-num)){
          let exceso=(mensaje[i]+num)-125;
          mensaje[i]=31+exceso;
        }else{
          mensaje[i]=mensaje[i].charCodeAt(0)+num;
        }
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
