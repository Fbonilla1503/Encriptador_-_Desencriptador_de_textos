// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const inputTextArea = document.getElementById("input__textArea");
    const outputTextArea = document.getElementById("output__textArea");
    const botonEncriptar = document.getElementById("botonEncriptar");
    const botonDesencriptar = document.getElementById("botonDesencriptar");
    const botonCopiar = document.getElementById("botonCopiar");
    const areaMuneco = document.getElementById("areaMuneco");
    const mensajeH2 = areaMuneco.nextElementSibling;
    const mensajeP = mensajeH2.nextElementSibling;

    // Función para encriptar el texto según las reglas especificadas
    function encriptar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar el texto según las reglas especificadas
    function desencriptar(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Función para mostrar el resultado en el área de salida
    function mostrarResultado(texto) {
        areaMuneco.style.display = "none"; // Ocultar la imagen del muñeco
        mensajeH2.style.display = "none";  // Ocultar el mensaje <h2>
        mensajeP.style.display = "none";   // Ocultar el mensaje <p>
        outputTextArea.style.display = "block"; // Mostrar el área de salida
        botonCopiar.style.display = "block";    // Mostrar el botón de copiar
        outputTextArea.value = texto;           // Establecer el texto en el área de salida
    }

    // Función para limpiar las áreas de texto
    function limpiarTextAreas() {
        inputTextArea.value = "";  // Limpiar el área de entrada
        outputTextArea.value = ""; // Limpiar el área de salida
    }

    // Función para manejar el evento de encriptar
    function manejarEncriptar() {
        let texto = inputTextArea.value.trim().toLowerCase(); // Obtener y limpiar el texto de entrada
        if (!texto) {
            alert("Por favor ingresa un texto para encriptar."); // Mostrar alerta si el texto está vacío
            limpiarTextAreas(); // Limpiar áreas de texto
            return;
        }
        let textoEncriptado = encriptar(texto); // Encriptar el texto
        mostrarResultado(textoEncriptado); // Mostrar el resultado encriptado
    }

    // Función para manejar el evento de desencriptar
    function manejarDesencriptar() {
        let texto = inputTextArea.value.trim().toLowerCase(); // Obtener y limpiar el texto de entrada
        if (!texto) {
            alert("Por favor ingresa un texto para desencriptar."); // Mostrar alerta si el texto está vacío
            limpiarTextAreas(); // Limpiar áreas de texto
            return;
        }
        let textoDesencriptado = desencriptar(texto); // Desencriptar el texto
        if (textoDesencriptado === texto) {
            alert("El texto ya está desencriptado."); // Mostrar alerta si el texto ya está desencriptado
            limpiarTextAreas(); // Limpiar áreas de texto
            return;
        }
        mostrarResultado(textoDesencriptado); // Mostrar el resultado desencriptado
    }

    // Función para manejar el evento de copiar texto
    function copiarTexto() {
        outputTextArea.select(); // Seleccionar el texto en el área de salida
        document.execCommand("copy"); // Copiar el texto al portapapeles
        alert("Texto copiado al portapapeles."); // Mostrar alerta de confirmación
    }

    // Agregar evento para limpiar el área de entrada al hacer clic en ella
    inputTextArea.addEventListener("focus", function() {
        inputTextArea.value = "";
    });

    // Agregar eventos de clic a los botones
    botonEncriptar.addEventListener("click", manejarEncriptar);
    botonDesencriptar.addEventListener("click", manejarDesencriptar);
    botonCopiar.addEventListener("click", copiarTexto);

    // Inicializar elementos ocultos
    outputTextArea.style.display = "none";
    botonCopiar.style.display = "none";
});
