document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar ul');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.classList.toggle('fa-times');
    });

    // Smooth scrolling para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuToggle.classList.remove('fa-times');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Formularios
    const formOperador = document.getElementById('formOperador');
    if (formOperador) {
        formOperador.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registro enviado. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensaje enviado correctamente. Gracias por contactarnos.');
            this.reset();
        });
    }

    // Efecto al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
});
