document.addEventListener("DOMContentLoaded", () => {
    const calendarContainer = document.getElementById("calendar-container");
    const clearButton = document.getElementById("clear-calendar-btn");

    // Generar el calendario mensual
    function generateCalendar() {
        const daysInMonth = 30; // Ajustar según el mes deseado
        calendarContainer.innerHTML = ""; // Limpiar contenido previo

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");

            const dayNumber = document.createElement("div");
            dayNumber.classList.add("day-number");
            dayNumber.textContent = `Día ${day}`;

            const breakfastInput = document.createElement("input");
            breakfastInput.placeholder = "Desayuno";

            const lunchInput = document.createElement("input");
            lunchInput.placeholder = "Comida";

            const dinnerInput = document.createElement("input");
            dinnerInput.placeholder = "Cena";

            // Añadir los elementos al día
            dayElement.appendChild(dayNumber);
            dayElement.appendChild(breakfastInput);
            dayElement.appendChild(lunchInput);
            dayElement.appendChild(dinnerInput);

            // Añadir día al contenedor del calendario
            calendarContainer.appendChild(dayElement);
        }
    }

    // Limpiar calendario
    clearButton.addEventListener("click", () => {
        const inputs = calendarContainer.querySelectorAll("input");
        inputs.forEach(input => (input.value = ""));
    });

    // Inicializar calendario
    generateCalendar();
});
