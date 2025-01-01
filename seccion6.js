document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-adventure-btn");
    const clearButton = document.getElementById("clear-adventures-btn");
    const adventuresContainer = document.getElementById("adventures-container");

    // Añadir aventura
    addButton.addEventListener("click", () => {
        const placeInput = document.getElementById("place-input");
        const reasonInput = document.getElementById("reason-input");
        const locationLinkInput = document.getElementById("location-link-input");

        const place = placeInput.value.trim();
        const reason = reasonInput.value.trim();
        const locationLink = locationLinkInput.value.trim();

        if (place) {
            const adventure = document.createElement("div");
            adventure.classList.add("adventure");

            const now = new Date();
            const timestamp = now.toLocaleString();

            adventure.innerHTML = `
                <p><strong>${timestamp}</strong></p>
                <p><strong>Lugar o Actividad:</strong> ${place}</p>
                <p><strong>Razón:</strong> ${reason || "No especificado"}</p>
                ${
                    locationLink
                        ? `<p><strong>Ubicación:</strong> <a href="${locationLink}" target="_blank">${locationLink}</a></p>`
                        : ""
                }
            `;

            adventuresContainer.appendChild(adventure);

            // Limpiar campos
            placeInput.value = "";
            reasonInput.value = "";
            locationLinkInput.value = "";
        }
    });

    // Borrar todas las aventuras
    clearButton.addEventListener("click", () => {
        adventuresContainer.innerHTML = "";
    });
});
