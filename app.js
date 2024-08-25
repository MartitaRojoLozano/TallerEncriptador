
function btnEncriptar(){
    let textoA = "" ;
    let textoB = "" ;

    textoA = document.getElementById("textoUsuario").value ;
    textoB = document.getElementById("textoResultado").value ;
    
    textoA = textoA.toLowerCase() ;

    if(textoA.length > 0)
    {
        textoB = encriptar(textoA) ;
    }

    document.getElementById("textoResultado").value = textoB ;

    console.log(textoA) ;
    console.log(textoB) ;    
}

function btnCopiar(){
    let textoA = document.getElementById("textoResultado").value ;

    document.getElementById("textoUsuario").value = textoA ;
    document.getElementById("textoResultado").value = "" ;
    return ;
}

function btnDesencriptar(){

    let textoA = "" ;
    let textoB = "" ;

    textoA = document.getElementById("textoUsuario").value ;
    textoB = document.getElementById("textoResultado").value ;
    
    textoA = textoA.toLowerCase() ;

    if(textoA.length > 0)
    {
        textoB = desencriptar(textoA) ;
    }
    
    console.log(textoA) ;
    console.log(textoB) ;    

    document.getElementById("textoUsuario").value = textoA ;
    document.getElementById("textoResultado").value = textoB ;
    return ;
}

function encriptar(texto)
{
    let keyEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]  ;
    let textoEncriptado = texto

    /* let texto = document.getElementById("textoUsuario").value ; */

    for(let i=0; i < keyEncriptacion.length; i++){
        console.log(i) ;
        console.log(textoEncriptado) ;
        if( textoEncriptado.includes(keyEncriptacion[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(keyEncriptacion[i][0],keyEncriptacion[i][1]) ;
        }
    }

    document.getElementById("textoUsuario").value = "" ;
    return textoEncriptado ;
}

function desencriptar(texto)
{
    let keyEncriptacion = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]  ;
    let textoDesencriptado = texto ;

    for(let i=0; i < keyEncriptacion.length; i++){
        console.log(i) ;
        console.log(textoDesencriptado) ;
        if( textoDesencriptado.includes(keyEncriptacion[i][0])){
            textoDesencriptado = textoDesencriptado.replaceAll(keyEncriptacion[i][0],keyEncriptacion[i][1]) ;
        }
    }

    document.getElementById("textoUsuario").value = "" ;
    document.getElementById("textoResultado").value  = textoDesencriptado ;

    return(textoDesencriptado) ;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}