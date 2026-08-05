// --- 1. FILTRADO DE CURSOS ---
function filterCourses(category, element) {
  const buttons = document.querySelectorAll('.pill');
  buttons.forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  const courses = document.querySelectorAll('.course-row');
  courses.forEach(course => {
    if (category === 'todos' || course.getAttribute('data-category') === category) {
      course.style.display = 'flex';
    } else {
      course.style.display = 'none';
    }
  });
}

// --- 2. MANEJO DE REGISTRO / LOGIN ---
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

// --- 3. PASARELA MERCADO PAGO Y REDIRECCIÓN ---
let currentPrice = "0.00";

function openPaymentModal(courseName, price) {
  currentPrice = price;
  document.getElementById('pay-course-name').innerText = courseName;
  document.getElementById('pay-course-price').innerText = `S/ ${price} PE`;
  
  // Reiniciar estado de pantallas
  document.getElementById('form-mp').style.display = 'block';
  document.getElementById('pay-success-screen').style.display = 'none';
  
  document.getElementById('modal-pay').style.display = 'flex';
}

function closePayModal() {
  document.getElementById('modal-pay').style.display = 'none';
}

function processPayment(event) {
  event.preventDefault();
  
  const btnSubmit = document.getElementById('btn-pay-submit');
  btnSubmit.innerText = "Procesando con el banco...";
  btnSubmit.disabled = true;

  // Simular retraso de pasarela
  setTimeout(() => {
    document.getElementById('form-mp').style.display = 'none';
    
    const successScreen = document.getElementById('pay-success-screen');
    const successMsg = document.getElementById('success-msg');
    
    successMsg.innerText = `¡Pago procesado con éxito por S/ ${currentPrice} PE!`;
    successScreen.style.display = 'block';

    // Redirigir al aula virtual privada tras 3 segundos
    setTimeout(() => {
      window.location.href = 'curso-detalle.html';
    }, 3000);

  }, 1500);
}

// Verificar usuario en inicio
window.onload = function() {
  const savedUser = localStorage.getItem('edu_user');
  if (savedUser) {
    updateUserDisplay(savedUser);
  }
};