// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.hero, .portfolio-item img');
    parallaxElements.forEach(element => {
        const speed = element.classList.contains('hero') ? 0.5 : 0.2;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Floating animation for service cards
const floatingAnimation = () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        const delay = index * 0.2;
        card.style.animation = `float 3s ease-in-out ${delay}s infinite`;
    });
};

document.addEventListener('DOMContentLoaded', floatingAnimation);

// Intersection Observer untuk animasi fade in saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            // Animasi counter untuk statistik
            if (entry.target.querySelector('.counter')) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        
                        if (current < target) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                });
            }
        }
    });
}, { threshold: 0.1 });

// Mengamati semua elemen dengan class 'animate-on-scroll'
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // Testimonial carousel controls
    const carousel = document.querySelector('.testimonial-carousel');
    const items = carousel.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    const showSlide = (index) => {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    };
    
    prevBtn.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        showSlide(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    }, 5000);

    // Animasi untuk service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.03)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Animasi untuk social media icons
    const socialIcons = document.querySelectorAll('.social-media a, .footer-social a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Animasi untuk form inputs
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
            input.style.boxShadow = '0 0 10px rgba(150, 40, 39, 0.2)';
        });

        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
            input.style.boxShadow = 'none';
        });
    });
});