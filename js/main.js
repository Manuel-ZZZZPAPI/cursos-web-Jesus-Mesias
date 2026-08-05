// Control del Modal de Autenticación
function openModal() {
  document.getElementById('modal-auth').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-auth').style.display = 'none';
}

// Simulación de Inicio de Sesión
function handleLogin(event) {
  event.preventDefault();
  const user = document.getElementById('username').value;
  
  if (user) {
    localStorage.setItem('mathsec_user', user);
    alert(`¡Bienvenido ${user}! Redirigiendo al Aula Virtual...`);
    window.location.href = 'curso-privado.html';
  }
}

// Verificar usuario al cargar la página
window.onload = function() {
  const savedUser = localStorage.getItem('mathsec_user');
  const btnLogin = document.getElementById('btn-login');
  
  if (savedUser && btnLogin) {
    btnLogin.innerText = `Hola, ${savedUser}`;
  }
};