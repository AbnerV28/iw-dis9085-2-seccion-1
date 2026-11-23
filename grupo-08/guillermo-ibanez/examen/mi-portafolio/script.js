document.addEventListener('DOMContentLoaded', () => {
  /* =====================================================
     1. CURSOR PERSONALIZADO (PELOTITA MORADA EN TODO EL SITIO)
     ===================================================== */
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a, button, .tag').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* =====================================================
     2. EFECTO 3D TILT AL APOYARSE SOBRE UN PROYECTO
     ===================================================== */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.tilt-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-0.25rem)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease';
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
        setTimeout(() => {
          card.style.transition = 'box-shadow 0.35s ease';
        }, 450);
      });
    });
  }

  /* =====================================================
     3. SCROLL REVEAL (APARICIÓN SUAVE AL BAJAR)
     ===================================================== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  /* =====================================================
     4. CARRUSEL DE FOTOS EN PÁGINAS DE PROYECTO
     ===================================================== */
  const carousel = document.getElementById('project-carousel');
  if (carousel) {
    const folder = carousel.dataset.folder;
    const prefix = carousel.dataset.prefix;
    const total = parseInt(carousel.dataset.total, 10);

    const imgElement = document.getElementById('carousel-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 1;

    imgElement.onerror = function () {
      if (this.src.endsWith('.jpg')) {
        this.src = `img/${folder}/${prefix}${currentIndex}.png`;
      }
    };

    function updateImage() {
      imgElement.src = `img/${folder}/${prefix}${currentIndex}.jpg`;
      imgElement.alt = `${prefix} imagen ${currentIndex}`;
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = currentIndex === 1 ? total : currentIndex - 1;
      updateImage();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = currentIndex === total ? 1 : currentIndex + 1;
      updateImage();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    });
  }
});