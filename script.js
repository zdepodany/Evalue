// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        // Also close language dropdown if open
        document.querySelectorAll('.language-switcher-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .about-text, .about-visual, .contact-info, .contact-form');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.getAttribute('data-i18n') || submitButton.textContent;
        
        submitButton.textContent = translations[currentLanguage]['contact.sending'] || 'Odesílání...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitButton.textContent = translations[currentLanguage]['contact.sent'] || 'Zpráva odeslána! ✓';
            submitButton.style.background = '#10b981';
            
            // Reset form
            contactForm.reset();
            
            // Retranslate form placeholders after reset
            setTimeout(() => {
                translatePage();
            }, 100);
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = translations[currentLanguage][originalText] || originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);
        }, 1000);
        
        // In a real application, you would send the data to your server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle success
        // })
        // .catch(error => {
        //     // Handle error
        // });
    });
}

// Parallax effect for hero background only (not the whole section)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        const parallaxSpeed = 0.3;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}, { passive: true });

// Add active state to current section in navigation
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Category switching functionality for Products
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('#products .category-btn');
    const categoryContents = document.querySelectorAll('#products .category-content');

    if (categoryButtons.length === 0) {
        return;
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCategory = button.getAttribute('data-category');
            
            // Remove active class from all buttons and contents
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            categoryContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.querySelector(`#products .category-content[data-category="${targetCategory}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Apply product colors from data attributes
    const productCards = document.querySelectorAll('.product-card[data-product-color]');
    productCards.forEach(card => {
        const productColor = card.getAttribute('data-product-color');
        if (productColor) {
            card.style.setProperty('--product-color', productColor);
        }
    });
});


// Careers modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const careerButtons = document.querySelectorAll('.career-card-button');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    
    // Open modal
    careerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(`modal-${modalId}`);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal functions
    const closeModal = (modal) => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Close on close button click
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close on overlay click
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            const modal = overlay.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });
});

// Footer country switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const footerCountryButtons = document.querySelectorAll('.footer-country-btn');
    const footerContactContents = document.querySelectorAll('.footer-contact-content[data-footer-country]');

    if (footerCountryButtons.length === 0) {
        return;
    }

    footerCountryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCountry = button.getAttribute('data-footer-country');
            
            // Remove active class from all buttons and contents
            footerCountryButtons.forEach(btn => btn.classList.remove('active'));
            footerContactContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.querySelector(`.footer-contact-content[data-footer-country="${targetCountry}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
