//Botones
const $btnBajada = document.getElementById('bajar');
const $btnAction = document.getElementById('compiler');
const $btnModo = document.getElementsByClassName('active');
var valorModo = $btnModo[0].innerText;
$btnBajada.addEventListener('click',()=>{
    alert('Vamos pa abajo wiiiiiiiii');
});
$btnAction.addEventListener('click',()=>{
    valorModo = $btnModo[0].innerText;
    console.log('El modo es: ', valorModo);
    var texto = $textEntrada.value;
    //validar el texto primero y ya entrar a los if
    if(valorModo == 'ENCRIPTAR'){
        encript(texto);
    }else if(valorModo == 'DESENCRIPTAR'){
        decript(texto);
    }else{
        //meter un div en el index para mostrar mensajes de error
        alert('Aqui paso algo raro');
    }
});

//TextArea
const $textEntrada = document.getElementById('recepcion');
const $textSalida = document.getElementById('salida');

//funciones
function encript(entrada) {
    var primera = entrada.replaceAll('e','enter');
    primera = primera.replaceAll('i','imes');
    primera = primera.replaceAll('a','ai');
    primera = primera.replaceAll('o','ober');
    primera = primera.replaceAll('u','ufat');
    $textSalida.innerText=primera;
}
function decript(entrada) {
    console.log('woa a desencriptar esto: ',entrada);
    var reversa = entrada.replaceAll('ufat','u');
    reversa = reversa.replaceAll('ober','o');
    reversa = reversa.replaceAll('ai','a');
    reversa = reversa.replaceAll('imes','i');
    reversa = reversa.replaceAll('enter','e');
    $textSalida.innerText=reversa;
}
