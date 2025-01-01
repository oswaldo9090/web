const uploadBtn = document.getElementById("upload-btn");
const fileInput = document.getElementById("file-input");
const descriptionInput = document.getElementById("description");
const photoContainer = document.getElementById("photo-container");
const fireworksCanvas = document.getElementById("fireworks");
const ctx = fireworksCanvas.getContext("2d");

// Ajustar el tamaño del canvas
fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

// Subir foto y mostrarla
uploadBtn.addEventListener("click", () => {
    const file = fileInput.files[0];
    const description = descriptionInput.value.trim();

    if (!file) {
        alert("Por favor, selecciona una imagen.");
        return;
    }

    if (!description) {
        alert("Por favor, agrega una descripción.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function() {
            const timestamp = new Date().toLocaleString();
            const photoItem = document.createElement("div");
            photoItem.classList.add("photo-item");

            // Crear la foto
            const imgElement = document.createElement("img");
            imgElement.src = img.src;

            // Crear la descripción y la fecha
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = `${description} (Subido el ${timestamp})`;

            // Agregar la imagen y la descripción al contenedor
            photoItem.appendChild(imgElement);
            photoItem.appendChild(descriptionElement);

            // Agregar la nueva foto al contenedor
            photoContainer.prepend(photoItem);

            // Limpiar los campos
            fileInput.value = "";
            descriptionInput.value = "";

            // Mostrar fuegos artificiales
            launchFireworks();
        };
    };
    reader.readAsDataURL(file);
});

// Fuegos artificiales
function launchFireworks() {
    const particles = [];
    const particleCount = 100;

    function createParticle(x, y) {
        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 4 + 2;
        const particle = {
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1
        };
        particles.push(particle);
    }

    function drawParticles() {
        ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.01;

            if (p.alpha <= 0) {
                particles.splice(i, 1);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(255, 165, 0, ${p.alpha})`;
                ctx.fill();
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(drawParticles);
        }
    }

    for (let i = 0; i < particleCount; i++) {
        createParticle(window.innerWidth / 2, window.innerHeight / 2 + 100);
    }
    drawParticles();
}
