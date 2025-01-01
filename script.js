// Credenciales correctas (modifica estos valores con los nuevos)
const usuarioCorrecto = 'carlitoslpzb';  // Usuario correcto
const contrasenaCorrecta = '250707';     // Contraseña correcta

// Obtener los elementos del formulario
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Función para manejar el inicio de sesión
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtener los valores ingresados por el usuario
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verificar si las credenciales son correctas
    if (username === usuarioCorrecto && password === contrasenaCorrecta) {
        // Redirigir al sitio principal
        window.location.href = 'politicas.html'; // Cambia 'politicas html' por tu página principal
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        errorMessage.style.display = 'block';
    }
});
