// Referencias a los elementos
const sugerenciaInput = document.getElementById("sugerenciaInput");
const historialDiv = document.getElementById("historial");

// Función para enviar sugerencia
function enviarSugerencia() {
    const texto = sugerenciaInput.value.trim();

    if (texto === "") {
        alert("Por favor, escribe una sugerencia antes de enviarla.");
        return;
    }

    const fecha = new Date();
    const fechaTexto = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

    // Crear un elemento para la sugerencia
    const sugerenciaDiv = document.createElement("div");
    sugerenciaDiv.className = "sugerencia";
    sugerenciaDiv.innerHTML = `
        <div>${texto}</div>
        <div class="fecha">${fechaTexto}</div>
    `;

    // Agregar la sugerencia al historial
    historialDiv.prepend(sugerenciaDiv);

    // Limpiar el campo de texto
    sugerenciaInput.value = "";
}

// Función para borrar historial
function borrarHistorial() {
    if (confirm("¿Estás seguro de que quieres borrar el historial?")) {
        historialDiv.innerHTML = "";
    }
}
