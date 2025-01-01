document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-btn");
    const clearButton = document.getElementById("clear-history-btn");
    const entryContainer = document.getElementById("entry-container");

    // Añadir texto y enlace
    addButton.addEventListener("click", () => {
        const description = document.getElementById("song-description").value.trim();
        const link = document.getElementById("song-link").value.trim();

        if (description || link) {
            const entry = document.createElement("div");
            entry.classList.add("entry");

            const now = new Date();
            const timestamp = now.toLocaleString();

            entry.innerHTML = `
                <p><strong>${timestamp}</strong></p>
                <p>${description || "Sin descripción"}</p>
                ${link ? `<a href="${link}" target="_blank">Escuchar canción</a>` : ""}
            `;

            entryContainer.appendChild(entry);
            document.getElementById("song-description").value = "";
            document.getElementById("song-link").value = "";
        }
    });

    // Borrar historial
    clearButton.addEventListener("click", () => {
        entryContainer.innerHTML = "";
    });
});
