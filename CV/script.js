document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Menú móvil
  const toggleMenu = document.querySelector('.toggle-menu');
  const navUl = document.querySelector('nav ul');

  toggleMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Navegación suave al hacer click en los enlaces del menú
  const menuLinks = document.querySelectorAll('nav ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navUl.classList.remove('active');
      nav.classList.remove('active');
      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animaciones al hacer scroll
  const elementosAnimados = document.querySelectorAll('.timeline-item, .estudio-item, .proyecto-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementosAnimados.forEach(elemento => {
    observer.observe(elemento);
  });

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Gracias por contactarme. Te responderé pronto.');
    form.reset();
  });
});
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});