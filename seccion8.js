// Arreglo con 365 datos curiosos
const datosCuriosos = [
    "Las abejas nunca duermen.",
    "Los flamencos obtienen su color rosado de la comida que comen.",
    "El tiburón ballena es el pez más grande del mundo.",
    "Los koalas duermen hasta 20 horas al día.",
    "El corazón de una ballena azul puede pesar más de 400 kilos.",
    "El 'veneno' de las ranas dardo doradas es uno de los más tóxicos del mundo.",
    "Una nube promedio pesa alrededor de 500 toneladas.",
    "La miel es el único alimento que no se pudre.",
    "Los pulpos tienen tres corazones.",
    "Los caballos pueden dormir tanto de pie como acostados.",
    // Añade aquí los 355 datos restantes...
    "Las huellas dactilares de un koala son tan similares a las humanas que pueden confundir en escenas de crímenes.",
    "Un día en Venus dura más que un año en Venus.",
    "Los cerdos no pueden mirar hacia el cielo.",
    "El chocolate blanco no es realmente chocolate.",
    "El agua puede hervir y congelarse al mismo tiempo bajo ciertas condiciones.",
    "El corazón humano late más de 100,000 veces al día.",
    "Las zanahorias eran originalmente moradas.",
    "Los astronautas crecen en el espacio debido a la falta de gravedad.",
    "El cerebro humano utiliza el 20% del oxígeno que consume el cuerpo.",
    "El caracol de jardín promedio tiene 14,175 dientes.",
    // ... y así hasta completar los 365.
];

// Función para mostrar un dato curioso
function mostrarDato() {
    const index = Math.floor(Math.random() * datosCuriosos.length);
    const datoCurioso = datosCuriosos[index];
    const curiousDataDiv = document.getElementById("curious-data");
    curiousDataDiv.textContent = datoCurioso;
}
