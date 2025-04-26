function registrarUsuario() {
  const nombre = document.getElementById("reg-nombre").value;
  const email = document.getElementById("reg-email").value;
  const pass = document.getElementById("reg-pass").value;

  if (!nombre || !email || !pass) {
    alert("Por favor completa todos los campos de registro.");
    return;
  }

  localStorage.setItem("usuario", JSON.stringify({ nombre, email, pass }));
  alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
}

function iniciarSesion() {
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const mensaje = document.getElementById("mensaje-login");
  const promociones = document.getElementById("contenido-exclusivo");

  if (usuario && usuario.email === email && usuario.pass === pass) {
    mensaje.textContent = `¡Bienvenido/a, ${usuario.nombre}!`;
    promociones.style.display = "block";
  } else {
    mensaje.textContent = "Credenciales incorrectas.";
    promociones.style.display = "none";
  }
}

function cerrarSesion() {
  document.getElementById("mensaje-login").textContent = "Has cerrado sesión.";
  document.getElementById("contenido-exclusivo").style.display = "none";
}
