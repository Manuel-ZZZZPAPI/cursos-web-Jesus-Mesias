// --- BASE DE DATOS DE LOS 5 CURSOS ---
const coursesData = {
  "quimica": {
    title: "🧪 Curso: Laboratorio de Química y Física",
    desc: "Experimentos virtuales, infografías animadas y estructura de la materia.",
    modules: ["📌 Módulo 1: La Materia", "📌 Módulo 2: Tabla Periódica", "📌 Módulo 3: Leyes de Newton", "📌 Módulo 4: Experimentos"],
    video: "https://www.youtube.com/embed/fOuRqk1nzgY",
    images: [
      { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400", title: "Esquema 1: Estructura del Átomo" },
      { url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400", title: "Esquema 2: Reacciones Químicas" }
    ]
  },
  "algebra": {
    title: "📐 Curso: Álgebra Aplicada y Trigonometría",
    desc: "Aprende resolución de ecuaciones, gráficos de funciones y trigonometría.",
    modules: ["📌 Módulo 1: Ecuaciones de 2do Grado", "📌 Módulo 2: Funciones y Gráficas", "📌 Módulo 3: Razones Trigonométricas", "📌 Módulo 4: Geometría 3D"],
    video: "https://www.youtube.com/embed/x29311A3p0Q",
    images: [
      { url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400", title: "Esquema 1: Fórmula General y Parábolas" },
      { url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400", title: "Esquema 2: Triángulos y Seno/Coseno" }
    ]
  },
  "historia": {
    title: "📖 Curso: Historia Universal e Infografías",
    desc: "Líneas de tiempo interactivas, esquemas visuales y civilizaciones antiguas.",
    modules: ["📌 Módulo 1: Prehistoria y Egipto", "📌 Módulo 2: Grecia y Roma", "📌 Módulo 3: Edad Media", "📌 Módulo 4: Historia Contemporánea"],
    video: "https://www.youtube.com/embed/6E8m5G34g-U",
    images: [
      { url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400", title: "Esquema 1: Línea de Tiempo de las Eras" },
      { url: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400", title: "Esquema 2: Mapa de Antiguas Civilizaciones" }
    ]
  },
  "biologia": {
    title: "🔬 Curso: Biología General y Anatomía",
    desc: "Células, genética, sistemas del cuerpo humano y ecología.",
    modules: ["📌 Módulo 1: La Célula y ADN", "📌 Módulo 2: Sistema Circulatorio", "📌 Módulo 3: Genética de Mendel", "📌 Módulo 4: Ecosistemas"],
    video: "https://www.youtube.com/embed/0I-03C28_T4",
    images: [
      { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400", title: "Esquema 1: Estructura Celular" },
      { url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400", title: "Esquema 2: Cadena del ADN" }
    ]
  },
  "lenguaje": {
    title: "✍️ Curso: Lenguaje, Gramática y Redacción",
    desc: "Ortografía práctica, reglas de acentuación, sintaxis y literatura.",
    modules: ["📌 Módulo 1: Reglas de Acentuación", "📌 Módulo 2: La Oración y Sintaxis", "📌 Módulo 3: Taller de Redacción", "📌 Módulo 4: Géneros Literarios"],
    video: "https://www.youtube.com/embed/U3BTo_G_tqQ",
    images: [
      { url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400", title: "Esquema 1: Reglas Ortográficas" },
      { url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400", title: "Esquema 2: Estructura del Párrafo" }
    ]
  }
};

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

// --- 2. REGISTRO / LOGIN ---
function openAuthModal() {
  const modal = document.getElementById('modal-auth');
  if(modal) modal.style.display = 'flex';
}

function closeAuthModal() {
  const modal = document.getElementById('modal-auth');
  if(modal) modal.style.display = 'none';
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const userName = document.getElementById('auth-name').value;
  if (userName) {
    localStorage.setItem('edu_user', userName);
    updateUserDisplay(userName);
    closeAuthModal();
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

// --- 3. PASARELA MERCADO PAGO ---
let currentPrice = "0.00";
let selectedCourseKey = "quimica";

function openPaymentModal(courseName, price, courseKey) {
  currentPrice = price;
  selectedCourseKey = courseKey;
  
  const nameEl = document.getElementById('pay-course-name');
  const priceEl = document.getElementById('pay-course-price');
  
  if (nameEl) nameEl.innerText = courseName;
  if (priceEl) priceEl.innerText = `S/ ${price} PE`;
  
  const formMp = document.getElementById('form-mp');
  const successScreen = document.getElementById('pay-success-screen');
  const modalPay = document.getElementById('modal-pay');

  if(formMp) formMp.style.display = 'block';
  if(successScreen) successScreen.style.display = 'none';
  if(modalPay) modalPay.style.display = 'flex';
}

function closePayModal() {
  const modalPay = document.getElementById('modal-pay');
  if(modalPay) modalPay.style.display = 'none';
}

function processPayment(event) {
  event.preventDefault();
  const btnSubmit = document.getElementById('btn-pay-submit');
  if(btnSubmit) {
    btnSubmit.innerText = "Procesando...";
    btnSubmit.disabled = true;
  }

  // Guardar inmediatamente el curso seleccionado
  localStorage.setItem('active_course', selectedCourseKey);

  // Simulación ultra-rápida (solo 400ms)
  setTimeout(() => {
    const formMp = document.getElementById('form-mp');
    const successScreen = document.getElementById('pay-success-screen');
    const successMsg = document.getElementById('success-msg');
    
    if(formMp) formMp.style.display = 'none';
    if(successMsg) successMsg.innerText = `¡Pago procesado con éxito por S/ ${currentPrice} PE!`;
    if(successScreen) successScreen.style.display = 'block';

    // Redirigir casi instantáneamente
    setTimeout(() => {
      window.location.href = 'curso-detalle.html';
    }, 1000);

  }, 400);
}

// --- 4. RENDERIZADO DEL AULA VIRTUAL ---
function renderCourseDetail() {
  const activeKey = localStorage.getItem('active_course') || "quimica";
  const course = coursesData[activeKey] || coursesData["quimica"];

  const titleEl = document.getElementById('course-title');
  const descEl = document.getElementById('course-desc');
  const modulesNav = document.getElementById('course-modules');
  const gallery = document.getElementById('course-gallery');
  const videoEl = document.getElementById('course-video');

  if (titleEl) titleEl.innerText = course.title;
  if (descEl) descEl.innerText = course.desc;

  if (modulesNav) {
    modulesNav.innerHTML = course.modules.map((mod, index) => 
      `<a href="#" class="${index === 0 ? 'active' : ''}">${mod}</a>`
    ).join('');
  }

  if (gallery) {
    gallery.innerHTML = course.images.map(img => `
      <div class="img-card">
        <img src="${img.url}" alt="${img.title}">
        <p>${img.title}</p>
      </div>
    `).join('');
  }

  if (videoEl) videoEl.src = course.video;
}

// Cargar automáticamente al abrir cualquier vista
document.addEventListener("DOMContentLoaded", function() {
  const savedUser = localStorage.getItem('edu_user');
  if (savedUser) updateUserDisplay(savedUser);

  if (document.getElementById('course-title')) {
    renderCourseDetail();
  }
});