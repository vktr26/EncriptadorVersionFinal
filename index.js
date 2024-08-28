function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let buscando = document.getElementById("buscando");
    let resultado = document.getElementById("textarea"); 

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length !== 0) {
        textarea.value = textoCifrado; 
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        buscando.src = "./img/encriptado.png";
    } else {
        buscando.src = "./img/buscando.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let buscando = document.getElementById("buscando");
    let resultado = document.getElementById("textarea"); 

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length !== 0) {
        textarea.value = textoCifrado 
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        buscando.src = "./img/desencriptado.png";
    } else {
        buscando.src = "./img/buscando.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function copiar() {
    let textarea = document.getElementById("textarea");
    if (textarea.value.length !== 0) {
        navigator.clipboard.writeText(textarea.value).then(() => {
            
            alert("Texto copiado al portapapeles.");
        }).catch(err => {
            console.error("Error al copiar al portapapeles: ", err);
        });
    } else {
        alert("No hay texto para copiar");
    }
}
