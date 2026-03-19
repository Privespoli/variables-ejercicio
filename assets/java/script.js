// CAPTURAR NOME 
const boton = document.getElementById('btnSaludar');
const btnCalcular = document.getElementById('btnCalcular');

// CALCULADORA CÃO


// CAPTURAR NOME 
boton.addEventListener('click', function() {
    // 1. Capturamos el valor del input
    const nombre = document.getElementById('nombreUsuario').value;
    
    // 2. Seleccionamos el h1 donde mostraremos el mensaje
    const titulo = document.getElementById('mensajeBienvenida');
    
    // 3. Validamos que no esté vacío y concatenamos con +
    if (nombre !== "") {
        titulo.innerText = "Olá " + nombre + "! Bem vindo ao código!";
    } else {
        titulo.innerText = "Por favor, escribe un nombre.";
    }
});

// CALCULADORA CÃO
btnCalcular.addEventListener('click', function() {
    // 1. Capturamos el valor (llega como String)
    const datoInput = document.getElementById('edadHumana').value;
    
    // 2. Convertimos a número usando Number() o el símbolo +
    const edadNumero = Number(datoInput);
    
    // 3. Realizamos el cálculo
    const edadPerruna = edadNumero * 7;
    
    // 4. Mostramos el resultado en el párrafo
    const parrafo = document.getElementById('resultadoPerruno');
    
    if (datoInput !== "") {
        parrafo.innerText = "SUA IDADE CACHORREIRA É: " + edadPerruna;
    } else {
        parrafo.innerText = "Por favor, ingresa una edad válida.";
    }
});