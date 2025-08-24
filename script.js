// ==============================
// Scroll suave para enlaces internos
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==============================
// Mostrar "back to top" botón
// ==============================
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.id = 'backToTop';
backToTop.style.cssText = `
  position: fixed; bottom: 20px; right: 20px; 
  display: none; padding: 10px 15px; 
  background-color: #3c6e47; color: white; border: none; border-radius: 5px; cursor: pointer;
`;
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) backToTop.style.display = 'block';
    else backToTop.style.display = 'none';
});

// ==============================
// Ejemplo de animación simple al hacer scroll
// ==============================
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
