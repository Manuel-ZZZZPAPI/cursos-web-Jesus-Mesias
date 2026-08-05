// --- BASE DE DATOS DE LOS 5 CURSOS CON CONTENIDO POR MÓDULO ---
const coursesData = {
  "quimica": {
    title: "🧪 Curso: Laboratorio de Química y Física",
    desc: "Experimentos virtuales, infografías animadas y estructura de la materia.",
    modules: [
      { name: "📌 Módulo 1: La Materia", video: "https://www.youtube.com/embed/fOuRqk1nzgY", images: [{ url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400", title: "Materia y Moléculas" }] },
      { name: "📌 Módulo 2: Tabla Periódica", video: "https://www.youtube.com/embed/fOuRqk1nzgY", images: [{ url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400", title: "Elementos Químicos" }] },
      { name: "📌 Módulo 3: Leyes de Newton", video: "https://www.youtube.com/embed/fOuRqk1nzgY", images: [{ url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400", title: "Fuerza y Dinámica" }] },
      { name: "📌 Módulo 4: Experimentos", video: "https://www.youtube.com/embed/fOuRqk1nzgY", images: [{ url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400", title: "Laboratorio Práctico" }] }
    ]
  },
  "algebra": {
    title: "📐 Curso: Álgebra Aplicada y Trigonometría",
    desc: "Aprende resolución de ecuaciones, gráficos de funciones y trigonometría.",
    modules: [
      { name: "📌 Módulo 1: Ecuaciones de 2do Grado", video: "https://www.youtube.com/embed/L1c_vEsm1vA", images: [{ url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400", title: "Fórmula General" }] },
      { name: "📌 Módulo 2: Funciones y Gráficas", video: "https://www.youtube.com/embed/L1c_vEsm1vA", images: [{ url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400", title: "Plano Cartesiano" }] },
      { name: "📌 Módulo 3: Razones Trigonométricas", video: "https://www.youtube.com/embed/L1c_vEsm1vA", images: [{ url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400", title: "Seno y Coseno" }] },
      { name: "📌 Módulo 4: Geometría 3D", video: "https://www.youtube.com/embed/L1c_vEsm1vA", images: [{ url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400", title: "Sólidos Espaciales" }] }
    ]
  },
  "historia": {
    title: "📖 Curso: Historia Universal e Infografías",
    desc: "Líneas de tiempo interactivas, esquemas visuales y civilizaciones antiguas.",
    modules: [
      { name: "📌 Módulo 1: Prehistoria y Egipto", video: "https://www.youtube.com/embed/G2tUkEvo_lM", images: [{ url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400", title: "Las Pirámides" }] },
      { name: "📌 Módulo 2: Grecia y Roma", video: "https://www.youtube.com/embed/G2tUkEvo_lM", images: [{ url: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400", title: "Imperio Romano" }] },
      { name: "📌 Módulo 3: Edad Media", video: "https://www.youtube.com/embed/G2tUkEvo_lM", images: [{ url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400", title: "Feudalismo" }] },
      { name: "📌 Módulo 4: Historia Contemporánea", video: "https://www.youtube.com/embed/G2tUkEvo_lM", images: [{ url: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400", title: "Siglo XX" }] }
    ]
  },
  "biologia": {
    title: "🔬 Curso: Biología General y Anatomía",
    desc: "Células, genética, sistemas del cuerpo humano y ecología.",
    modules: [
      { name: "📌 Módulo 1: La Célula y ADN", video: "https://www.youtube.com/embed/3RryfP9b_jE", images: [{ url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400", title: "Estructura Celular" }] },
      { name: "📌 Módulo 2: Sistema Circulatorio", video: "https://www.youtube.com/embed/3RryfP9b_jE", images: [{ url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400", title: "Anatomía Humana" }] },
      { name: "📌 Módulo 3: Genética de Mendel", video: "https://www.youtube.com/embed/3RryfP9b_jE", images: [{ url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400", title: "Leyes de la Herencia" }] },
      { name: "📌 Módulo 4: Ecosistemas", video: "https://www.youtube.com/embed/3RryfP9b_jE", images: [{ url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400", title: "Biodiversidad" }] }
    ]
  },
  "lenguaje": {
    title: "✍️ Curso: Lenguaje, Gramática y Redacción",
    desc: "Ortografía práctica, reglas de acentuación, sintaxis y literatura.",
    modules: [
      { name: "📌 Módulo 1: Reglas de Acentuación", video: "https://www.youtube.com/embed/fOnpCmsQvS8", images: [{ url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400", title: "Tildación Aguda, Grave y Esdrújula" }] },
      { name: "📌 Módulo 2: La Oración y Sintaxis", video: "https://www.youtube.com/embed/fOnpCmsQvS8", images: [{ url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400", title: "Sujeto y Predicado" }] },
      { name: "📌 Módulo 3: Taller de Redacción", video: "https://www.youtube.com/embed/fOnpCmsQvS8", images: [{ url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400", title: "Estructura del Ensayo" }] },
      { name: "📌 Módulo 4: Géneros Literarios", video: "https://www.youtube.com/embed/fOnpCmsQvS8", images: [{ url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400", title: "Lírica, Narrativa y Drama" }] }
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

  localStorage.setItem('active_course', selectedCourseKey);

  setTimeout(() => {
    const formMp = document.getElementById('form-mp');
    const successScreen = document.getElementById('pay-success-screen');
    const successMsg = document.getElementById('success-msg');
    
    if(formMp) formMp.style.display = 'none';
    if(successMsg) successMsg.innerText = `¡Pago procesado con éxito por S/ ${currentPrice} PE!`;
    if(successScreen) successScreen.style.display = 'block';

    setTimeout(() => {
      window.location.href = 'curso-detalle.html';
    }, 1000);

  }, 400);
}

// --- 4. RENDERIZADO DEL AULA Y MÓDULOS INTERACTIVOS ---
function selectModule(index) {
  const activeKey = localStorage.getItem('active_course') || "quimica";
  const course = coursesData[activeKey] || coursesData["quimica"];
  const module = course.modules[index];

  // Actualizar estilos de la barra lateral
  const moduleLinks = document.querySelectorAll('#course-modules a');
  moduleLinks.forEach((link, i) => {
    if (i === index) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Cambiar Video y Galería
  const gallery = document.getElementById('course-gallery');
  const videoEl = document.getElementById('course-video');

  if (gallery) {
    gallery.innerHTML = module.images.map(img => `
      <div class="img-card">
        <img src="${img.url}" alt="${img.title}">
        <p>${img.title}</p>
      </div>
    `).join('');
  }

  if (videoEl) videoEl.src = module.video;
}

function renderCourseDetail() {
  const activeKey = localStorage.getItem('active_course') || "quimica";
  const course = coursesData[activeKey] || coursesData["quimica"];

  const titleEl = document.getElementById('course-title');
  const descEl = document.getElementById('course-desc');
  const modulesNav = document.getElementById('course-modules');

  if (titleEl) titleEl.innerText = course.title;
  if (descEl) descEl.innerText = course.desc;

  // Generar enlaces clickeables de los módulos
  if (modulesNav) {
    modulesNav.innerHTML = course.modules.map((mod, index) => 
      `<a href="javascript:void(0)" onclick="selectModule(${index})" class="${index === 0 ? 'active' : ''}">${mod.name}</a>`
    ).join('');
  }

  // Cargar el módulo 0 por defecto
  selectModule(0);
}

document.addEventListener("DOMContentLoaded", function() {
  const savedUser = localStorage.getItem('edu_user');
  if (savedUser) updateUserDisplay(savedUser);

  if (document.getElementById('course-title')) {
    renderCourseDetail();
  }
});