// --- 1. BASE DE DATOS PERSONALIZABLE POR CURSO Y MÓDULO ---
const coursesData = {
  "quimica": {
    title: "🧪 Curso: Laboratorio de Química y Física",
    desc: "Experimentos virtuales, infografías animadas y estructura de la materia.",
    modules: [
      { 
        name: "📌 Módulo 1: La Materia", 
        video: "https://www.youtube.com/embed/vPaPmrfgmvo", 
        pdf: "docs/quimica-m1.pdf",
        images: [{ url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400", title: "Infografía: Átomos y Moléculas" }] 
      },
      { 
        name: "📌 Módulo 2: Tabla Periódica", 
        video: "https://www.youtube.com/embed/FqZ3BSeu1d0", 
        pdf: "docs/quimica-m2.pdf",
        images: [{ url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400", title: "Tabla Periódica Ilustrada" }] 
      },
      { 
        name: "📌 Módulo 3: Leyes de Newton", 
        video: "https://www.youtube.com/embed/iLt6C1oxmlc", 
        pdf: "docs/quimica-m3.pdf",
        images: [{ url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400", title: "Leyes de la Dinámica" }] 
      },
      { 
        name: "📌 Módulo 4: Experimentos", 
        video: "https://www.youtube.com/embed/299hBkuNgYk", 
        pdf: "docs/quimica-m4.pdf",
        images: [{ url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400", title: "Guía de Laboratorio" }] 
      }
    ]
  },
  "algebra": {
    title: "📐 Curso: Álgebra Aplicada y Trigonometría",
    desc: "Aprende resolución de ecuaciones, gráficos de funciones y trigonometría.",
    modules: [
      { 
        name: "📌 Módulo 1: Ecuaciones de 2do Grado", 
        video: "https://www.youtube.com/embed/ZC67c5ar9mA", 
        pdf: "docs/algebra-m1.pdf",
        images: [{ url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400", title: "Fórmula General" }] 
      },
      { 
        name: "📌 Módulo 2: Funciones y Gráficas", 
        video: "https://www.youtube.com/embed/ojiMGOqwwCE", 
        pdf: "docs/algebra-m2.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnmrYc51LdWQnFL_DPoTEL2nDoDpS_5iFu3Kpf2tyXZ8O5e9tjpm4i_tP&s=10", title: "Plano Cartesiano" }] 
      },
      { 
        name: "📌 Módulo 3: Razones Trigonométricas", 
        video: "https://www.youtube.com/embed/CRg5jQRj1Hg", 
        pdf: "docs/algebra-m3.pdf",
        images: [{ url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-r3QLKk8UK_djXyRWYCSnaZGz8s_D0AyIPRGKGS5AmEOeKpBW", title: "Triángulos Rectángulos" }] 
      },
      { 
        name: "📌 Módulo 4: Geometría 3D", 
        video: "https://www.youtube.com/embed/RWwJ7NGpdQQ", 
        pdf: "docs/algebra-m4.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37HYEEfP7W5cEGioIUC9yqJlcRaA8s9ZpEH1ywjEqypqAVEfZB0EEdrI&s=10", title: "Cuerpos Geométricos" }] 
      }
    ]
  },
  "historia": {
    title: "📖 Curso: Historia Universal e Infografías",
    desc: "Líneas de tiempo interactivas, esquemas visuales y civilizaciones antiguas.",
    modules: [
      { 
        name: "📌 Módulo 1: Prehistoria y Egipto", 
        video: "https://www.youtube.com/embed/ZUyWM3nr4yY", 
        pdf: "docs/historia-m1.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMAF0Xim4a_B6PlR0hwKK1XN8zqG_4sDlLTcSidM__EWYrAbsHPGd62c&s=10", title: "Egipto Antiguo" }] 
      },
      { 
        name: "📌 Módulo 2: Grecia y Roma", 
        video: "https://www.youtube.com/embed/G2tUkEvo_lM", 
        pdf: "docs/historia-m2.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-d7BVdGTm9nM6d1aiqLf30y7IW7Fp-ZxBM7h0fdWASnNk8U_UMBwmIQI&s=10", title: "Grecia Clásica" }] 
      },
      { 
        name: "📌 Módulo 3: Edad Media", 
        video: "https://www.youtube.com/embed/Ra1bg5KcgNw", 
        pdf: "docs/historia-m3.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZk2-LVddNxxf49ajGJXd4bPRC9es2u4LfDg2KaxiDiVGvLwUK1UqLk2q-&s=10", title: "El Feudalismo" }] 
      },
      { 
        name: "📌 Módulo 4: Historia Contemporánea", 
        video: "https://www.youtube.com/embed/G2tUkEvo_lM", 
        pdf: "docs/historia-m4.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3isU9QtP0xNgbLTgjsxw8J7wbx7v7l3mv6axS835A7TUmD--kOIach8&s=10", title: "Revolución Industrial" }] 
      }
    ]
  },
  "biologia": {
    title: "🔬 Curso: Biología General y Anatomía",
    desc: "Células, genética, sistemas del cuerpo humano y ecología.",
    modules: [
      { 
        name: "📌 Módulo 1: La Célula y ADN", 
        video: "https://www.youtube.com/embed/tfDRCSjqqvQ", 
        pdf: "docs/biologia-m1.pdf",
        images: [{ url: "https://medlineplus.gov/images/PX000098_PRESENTATION.jpeg", title: "Célula Eucariota" }] 
      },
      { 
        name: "📌 Módulo 2: Sistema Circulatorio", 
        video: "https://www.youtube.com/embed/n1Sxp8AAUAw", 
        pdf: "docs/biologia-m2.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07wd84RrsdjGGKtkb5mnLFH-cpd8UQrs904xtUCQsxSCLisHmyIBm9bQx&s=10", title: "Anatomía Cardíaca" }] 
      },
      { 
        name: "📌 Módulo 3: Genética de Mendel", 
        video: "https://www.youtube.com/embed/LXXK2l1pdv8", 
        pdf: "docs/biologia-m3.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yruTAUMsK3BfKVPVI36CEOUppAbvAUYZxmSqTGoBNA&s=10", title: "Leyes Genéticas" }] 
      },
      { 
        name: "📌 Módulo 4: Ecosistemas", 
        video: "https://www.youtube.com/embed/Hut5uxHda38", 
        pdf: "docs/biologia-m4.pdf",
        images: [{ url: "https://upload.wikimedia.org/wikipedia/commons/7/71/FoodChain.svg", title: "Cadenas Tróficas" }] 
      }
    ]
  },
  "lenguaje": {
    title: "✍️ Curso: Lenguaje, Gramática y Redacción",
    desc: "Ortografía práctica, reglas de acentuación, sintaxis y literatura.",
    modules: [
      { 
        name: "📌 Módulo 1: Reglas de Acentuación", 
        video: "https://www.youtube.com/embed/69KYr9BaiYA", 
        pdf: "docs/lenguaje-m1.pdf",
        images: [{ url: "https://i.ytimg.com/vi/hfsF47H00kw/maxresdefault.jpg", title: "Acentuación Diacrítica" }] 
      },
      { 
        name: "📌 Módulo 2: La Oración y Sintaxis", 
        video: "https://www.youtube.com/embed/Dv57mumxGgo", 
        pdf: "docs/lenguaje-m2.pdf",
        images: [{ url: "https://es-static.z-dn.net/files/d9c/7ac9c2aec4945c029214ec1d5b42362d.jpg", title: "Estructura Sintáctica" }] 
      },
      { 
        name: "📌 Módulo 3: Taller de Redacción", 
        video: "https://www.youtube.com/embed/pJPm2CGTPgc", 
        pdf: "docs/lenguaje-m3.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBv64ozwN6BHItrJJgGht_GwoSaN_cmXT7hX5_L46G9REDC3RDB9cbnc&s=10", title: "Redacción Formal" }] 
      },
      { 
        name: "📌 Módulo 4: Géneros Literarios", 
        video: "https://www.youtube.com/embed/9D4-vPfoQNM", 
        pdf: "docs/lenguaje-m4.pdf",
        images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtIzit-Qp8fYUM34qWzJ-eiRkW7iVpIHcUV2n5UJCNNXreiy7sbuM178&s=10", title: "Obras Cumbres" }] 
      }
    ]
  }
};

// --- PASARELA DE PAGO SIMULADA (MODAL) ---
function openPayModal(courseKey) {
  localStorage.setItem('active_course', courseKey);
  const course = coursesData[courseKey];
  const payTitle = document.getElementById('pay-course-title');
  if (payTitle && course) {
    payTitle.innerText = course.title;
  }
  const modal = document.getElementById('modal-pay');
  if (modal) modal.style.display = 'flex';
}

function closePayModal() {
  const modal = document.getElementById('modal-pay');
  if (modal) modal.style.display = 'none';
}

function procesarPagoSimulado(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-pay-submit');
  if (btn) {
    btn.innerText = "⏳ Procesando pago...";
    btn.disabled = true;
  }
  setTimeout(() => {
    window.location.href = 'curso-detalle.html';
  }, 1000);
}

// --- FILTRADO DE CURSOS POR CATEGORÍA ---
function filterCourses(category, element) {
  const buttons = document.querySelectorAll('.pill');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');

  const courses = document.querySelectorAll('.course-row');
  courses.forEach(course => {
    if (category === 'todos' || course.getAttribute('data-category') === category) {
      course.style.display = 'flex';
    } else {
      course.style.display = 'none';
    }
  });
}

// --- AUTENTICACIÓN Y LOGIN ---
function openAuthModal() {
  const modal = document.getElementById('modal-auth');
  if (modal) modal.style.display = 'flex';
}

function closeAuthModal() {
  const modal = document.getElementById('modal-auth');
  if (modal) modal.style.display = 'none';
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

// --- VISTA DE DETALLE Y REPRODUCTOR ---
function selectModule(index) {
  const activeKey = localStorage.getItem('active_course') || "quimica";
  const course = coursesData[activeKey] || coursesData["quimica"];
  const module = course.modules[index];

  const moduleLinks = document.querySelectorAll('#course-modules button, #course-modules a');
  moduleLinks.forEach((link, i) => {
    if (i === index) link.classList.add('active');
    else link.classList.remove('active');
  });

  const gallery = document.getElementById('course-gallery');
  const videoEl = document.getElementById('course-video');
  const pdfEl = document.getElementById('course-pdf');

  if (gallery && module.images) {
    gallery.innerHTML = module.images.map(img => `
      <div class="img-card" style="margin-bottom: 10px;">
        <img src="${img.url}" alt="${img.title}" style="max-width: 100%; border-radius: 6px;">
        <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #cbd5e1;">${img.title}</p>
      </div>
    `).join('');
  }

  if (videoEl) {
    // Convierte automáticamente cualquier tipo de enlace de YouTube al formato embed
    let rawUrl = module.video || "";
    let cleanVideoUrl = rawUrl
      .replace("watch?v=", "embed/")
      .replace("youtu.be/", "www.youtube.com/embed/")
      .replace("youtube.com/live/", "youtube.com/embed/")
      .split("&")[0]
      .split("?si=")[0];

    videoEl.src = cleanVideoUrl;
  }

  if (pdfEl) pdfEl.href = module.pdf || "#";
}

function renderCourseDetail() {
  const activeKey = localStorage.getItem('active_course') || "quimica";
  const course = coursesData[activeKey] || coursesData["quimica"];

  const titleEl = document.getElementById('course-title');
  const descEl = document.getElementById('course-desc');
  const modulesNav = document.getElementById('course-modules');

  if (titleEl) titleEl.innerText = course.title;
  if (descEl) descEl.innerText = course.desc;

  if (modulesNav) {
    modulesNav.innerHTML = course.modules.map((mod, index) => 
      `<button onclick="selectModule(${index})" class="pill ${index === 0 ? 'active' : ''}">${mod.name}</button>`
    ).join('');
  }

  selectModule(0);
}

document.addEventListener("DOMContentLoaded", function() {
  const savedUser = localStorage.getItem('edu_user');
  if (savedUser) updateUserDisplay(savedUser);

  if (document.getElementById('course-title')) {
    renderCourseDetail();
  }
});