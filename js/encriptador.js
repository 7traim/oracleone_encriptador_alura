//DECLARACION DE VARIABLES

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-result");
const infoOut = document.querySelector(".text-output")
const copy = document.querySelector('#paste');
let paste = document.getElementById('pasteButton');
let buttonEnc = document.getElementById('btnEnc');
let buttonDes = document.getElementById('btnDes')

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


//FUNCION ENCRIPTAR
function btnEncriptar(){
   const textoEncriptado = encriptar(textArea.value)
   mensaje.value= textoEncriptado
   textArea.value ="";

}

function encriptar (stringEncriptada) {
     let contenido = textArea.value;
     let regex = /^[a-zA-Z0-9\s\¿?¡!]+$/;

     if (regex.test(contenido)){
      let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
      stringEncriptada = stringEncriptada.toLowerCase()
 
     for(let i = 0; i < matrizCodigo.length; i++){
       if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        } 
     }
     infoOut.style.display= "none";
     return stringEncriptada
    
     } else{
      document.querySelector("#alerta").style.color = "red";
      document.querySelector("#alerta").style.fontSize = "1.8rem";
      infoOut.style.display= "block";
       
     }
     
     setTimeout(function(){document.querySelector("#alerta").style.color = "black"},3000);
     setTimeout(function(){document.querySelector("#alerta").style.fontSize = "1.5rem"},3000);


  
 }


 //FUNCION DESENCRIPTAR
 function btnDesencriptar(){
   const textoEncriptado = desencriptar(textArea.value)
   mensaje.value= textoEncriptado
   textArea.value ="";
}

 function desencriptar (stringDesencriptada) {
   let contenido = textArea.value;
   let regex = /^[a-zA-Z0-9\s\¿?¡!]+$/;

   if (regex.test(contenido)){
      let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

   for(let i = 0; i < matrizCodigo.length; i++){
     if (stringDesencriptada.includes(matrizCodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
   }
   infoOut.style.display= "none";
   return stringDesencriptada 
   } else{
     document.querySelector("#alerta").style.color = "red";
     document.querySelector("#alerta").style.fontSize = "1.8rem";
     infoOut.style.display= "block";
   }
   
     setTimeout(function(){document.querySelector("#alerta").style.color = "black"},3000);
     setTimeout(function(){document.querySelector("#alerta").style.fontSize = "1.5rem"},3000);
}

 // FUNCION COPIAR AL PORTAPAPELES

 copy.addEventListener('click', function() {
    navigator.clipboard.writeText(mensaje.value);

    pasteButton.style.display = 'inline';
    setTimeout(function(){document.querySelector("#pasteButton").style.display = "none"},4000);
});

//FUNCION PEGAR TEXTO DEL PORTAPAPELES
paste.addEventListener('click', function() {
    
   textArea.value = mensaje.value;
    
    mensaje.value = '';
    pasteButton.style.display = 'none';
});

