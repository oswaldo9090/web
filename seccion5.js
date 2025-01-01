document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-achievement-btn");
    const clearButton = document.getElementById("clear-achievements-btn");
    const achievementsContainer = document.getElementById("achievements-container");

    // Añadir logro
    addButton.addEventListener("click", () => {
        const input = document.getElementById("achievement-input");
        const achievementText = input.value.trim();

        if (achievementText) {
            const achievement = document.createElement("div");
            achievement.classList.add("achievement");

            const now = new Date();
            const timestamp = now.toLocaleString();

            achievement.innerHTML = `
                <p><strong>${timestamp}</strong></p>
                <p>${achievementText}</p>
            `;

            achievementsContainer.appendChild(achievement);
            input.value = ""; // Limpiar el campo de entrada
        }
    });

    // Borrar todos los logros
    clearButton.addEventListener("click", () => {
        achievementsContainer.innerHTML = "";
    });
});
