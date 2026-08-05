// --- 1. FILTRADO DE CURSOS EN TIEMPO REAL ---
function filterCourses(category, element) {
  // Cambiar estilo activo en los botones
  const buttons = document.querySelectorAll('.pill');
  buttons.forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  // Filtrar las tarjetas de cursos
  const courses = document.querySelectorAll('.course-row');
  courses.forEach(course => {
    if (category === 'todos' || course.getAttribute('data-category') === category) {
      course.style.display = 'flex';
    } else {
      course.style.display = 'none';
    }
  });
}

// --- 2. MANEJO DEL MODAL DE REGISTRO / LOGIN ---
function openAuthModal() {
  document.getElementById('modal-auth').style.display = 'flex';
}

function closeAuthModal() {
  document.getElementById('modal-auth').style.display = 'none';
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const userName = document.getElementById('auth-name').value;
  
  if (userName) {
    localStorage.setItem('edu_user', userName);
    updateUserDisplay(userName);
    closeAuthModal();
    alert(`¡Bienvenido/a ${userName}! Tus datos han sido guardados.`);
  }
}

function updateUserDisplay(name) {
  const userDisplay = document.getElementById('user-display');
  const btnAuth = document.getElementById('btn-auth');
  
  if (userDisplay) {
    userDisplay.innerText = `Estudiante: ${name}`;
    userDisplay.style.color = '#84cc16';
  }
  if (btnAuth) {
    btnAuth.innerText = 'Cerrar Sesión';
    btnAuth.onclick = logoutUser;
  }
}

function logoutUser() {
  localStorage.removeItem('edu_user');
  location.reload();
}

// Comprobar si hay un usuario guardado al cargar la página
window.onload = function() {
  const savedUser = localStorage.getItem('edu_user');
  if (savedUser) {
    updateUserDisplay(savedUser);
  }
};