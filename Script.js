document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar ul');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.classList.toggle('fa-times');
    });
    
    // Smooth Scrolling for Navigation Links
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
    
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide change every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause slider on hover
    const heroSlider = document.querySelector('.hero-slider');
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Form Validations
    const formOperador = document.getElementById('formOperador');
    if (formOperador) {
        formOperador.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would add form validation and submission logic
            alert('Formulario de operadores enviado correctamente. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }
    
    const formCotizador = document.getElementById('formCotizador');
    if (formCotizador) {
        formCotizador.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would add form validation and submission logic
            alert('Solicitud de cotización enviada. Te enviaremos la información a tu correo electrónico.');
            this.reset();
        });
    }
    
    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would add form validation and submission logic
            alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }
    
    const formNewsletter = document.getElementById('formNewsletter');
    if (formNewsletter) {
        formNewsletter.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            // Here you would add form validation and submission logic
            alert(`Gracias por suscribirte con el correo: ${emailInput.value}`);
            emailInput.value = '';
        });
    }
    
    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.servicio-card, .maquina-card, .operadores-info, .operadores-form, .cotizador-form, .cotizador-info, .contacto-info, .contacto-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    document.querySelectorAll('.servicio-card, .maquina-card, .operadores-info, .operadores-form, .cotizador-form, .cotizador-info, .contacto-info, .contacto-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
