const frases = {
    muy_malo: [
        "Incluso los peores días tienen su final. Mañana será mejor.",
        "Hoy puede ser difícil, pero eres más fuerte de lo que crees.",
        "No te rindas, las estrellas brillan más en la oscuridad.",
        // Añade más frases aquí (365 en total)
    ],
    malo: [
        "Un mal día no define quién eres. Sigue adelante.",
        "Mañana será una oportunidad para empezar de nuevo.",
        "Recuerda, todo es temporal. Mejorarán las cosas.",
        // Añade más frases aquí (365 en total)
    ],
    normal: [
        "Un día tranquilo es una oportunidad para reflexionar.",
        "Incluso los días normales son parte de tu gran historia.",
        "Aprovecha la calma para recargar energía.",
        // Añade más frases aquí (365 en total)
    ],
    bueno: [
        "Disfruta las pequeñas victorias, cada una cuenta.",
        "Un día bueno es una señal de que vas por buen camino.",
        "Sigue brillando, hoy fue solo el comienzo.",
        // Añade más frases aquí (365 en total)
    ],
    muy_bueno: [
        "Hoy es un día para recordar, lleno de momentos increíbles.",
        "Eres imparable, sigue con esta energía positiva.",
        "Aprovecha este impulso, el futuro es brillante.",
        // Añade más frases aquí (365 en total)
    ]
};

const fraseContainer = document.getElementById("frase-container");
const historialList = document.getElementById("historial-list");
const fireworksCanvas = document.getElementById("fireworks");
const ctx = fireworksCanvas.getContext("2d");

// Ajustar el tamaño del canvas
fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

// Generador de frases
document.querySelectorAll(".emoji").forEach(emoji => {
    emoji.addEventListener("click", () => {
        const category = emoji.dataset.category;
        if (frases[category] && frases[category].length > 0) {
            const index = Math.floor(Math.random() * frases[category].length);
            const frase = frases[category].splice(index, 1)[0];
            fraseContainer.textContent = frase;

            // Guardar en el historial
            const li = document.createElement("li");
            const fecha = new Date().toLocaleString();
            li.textContent = `[${fecha}] ${frase}`;
            historialList.appendChild(li);

            // Mostrar fuegos artificiales
            launchFireworks();
        } else {
            fraseContainer.textContent = "¡No hay más frases disponibles para esta categoría!";
        }
    });
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
