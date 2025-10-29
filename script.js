// Ultra Modern Portfolio JavaScript 2024

document.addEventListener("DOMContentLoaded", function () {
    // Initialize all modern features
    initializeModernAnimations();
    initializeEnhancedFormHandling();
    initializeCounterSystem();
    initializeParticleSystem();
    initializeLoadingScreen();
});

// Modern Animation System
function initializeModernAnimations() {
    // Add staggered loading animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add animation classes with modern timing
    addModernAnimationClasses();
}

// Add modern animation classes
function addModernAnimationClasses() {
    // Hero elements with staggered animations
    const heroElements = [
        { selector: '.hero-text', class: 'fade-in', delay: 0 },
        { selector: '.hero-section .lead', class: 'fade-in', delay: 300 },
        { selector: '.hero-section .btn-custom', class: 'scale-in', delay: 600 }
    ];

    heroElements.forEach(({ selector, class: animClass, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add(animClass);
            setTimeout(() => element.classList.add('visible'), delay);
        }
    });

    // About section with slide animations
    const aboutImage = document.querySelector('#about .custom-card');
    const aboutContent = document.querySelector('#about .col-lg-6:last-child');
    
    if (aboutImage) {
        aboutImage.classList.add('slide-in-left');
        setTimeout(() => aboutImage.classList.add('visible'), 400);
    }
    if (aboutContent) {
        aboutContent.classList.add('slide-in-right');
        setTimeout(() => aboutContent.classList.add('visible'), 600);
    }

    // Service cards with staggered fade-in
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-in');
        setTimeout(() => card.classList.add('visible'), 800 + (index * 200));
    });

    // Project cards with scale animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('scale-in');
        setTimeout(() => card.classList.add('visible'), 1000 + (index * 300));
    });

    // Testimonial cards with fade-in
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.classList.add('fade-in');
        setTimeout(() => card.classList.add('visible'), 1200 + (index * 200));
    });
}



// Advanced Counter System
function initializeCounterSystem() {
    const statsNumbers = document.querySelectorAll('.stats-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const suffix = element.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 60;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                element.style.animation = 'pulse 0.5s ease-out';
            }
            element.textContent = Math.floor(current) + suffix;
        }, 25);
    };

    // Observe stats section with advanced triggering
    const statsSection = document.querySelector('.stats-card');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numbers = entry.target.querySelectorAll('.stats-number');
                    numbers.forEach((number, index) => {
                        setTimeout(() => animateCounter(number), index * 200);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });
        
        statsObserver.observe(statsSection);
    }
}


// Particle System
function initializeParticleSystem() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // Create multiple particle types
    const particleTypes = [
        { color: 'var(--accent-primary)', size: '2px' },
        { color: 'var(--accent-secondary)', size: '3px' },
        { color: 'var(--accent-tertiary)', size: '1px' }
    ];
    
    for (let i = 0; i < 200; i++) {
        const particle = document.createElement('div');
        const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        
        particle.className = 'floating-element';
        particle.style.cssText = `
            position: absolute;
            width: ${type.size};
            height: ${type.size};
            background: ${type.color};
            border-radius: 50%;
            opacity: 0.6;
            animation: float-particle ${4 + Math.random() * 6}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 1;
        `;
        heroSection.appendChild(particle);
    }
}

// Modern Loading Screen
function initializeLoadingScreen() {
    const loader = document.createElement('div');
    loader.className = 'modern-loading-screen';
    loader.innerHTML = `
        <div class="loading-background">
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
                <div class="shape shape-5"></div>
            </div>
        </div>
        <div class="loader-content">
            <div class="logo-container">
                <div class="logo-circle">
                    <div class="logo-inner">
                        <span class="logo-text">F</span>
                    </div>
                </div>
            </div>
            <h2 class="loading-title">
                <span class="loading-text">Loading</span>
                <span class="loading-dots">
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                    <span class="dot">.</span>
                </span>
            </h2>
            <div class="loading-progress-container">
                <div class="progress-track">
                    <div class="progress-fill"></div>
                </div>
                <div class="progress-text">0%</div>
            </div>
            <div class="loading-subtitle">Preparing your experience...</div>
        </div>
    `;
    
    // Main loader styles
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
    `;
    
    // Background with floating shapes
    const background = loader.querySelector('.loading-background');
    background.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    `;
    
    // Floating shapes
    const shapes = loader.querySelectorAll('.shape');
    const shapeStyles = [
        { size: '60px', color: 'rgba(0, 255, 136, 0.3)', animation: 'float1 6s ease-in-out infinite' },
        { size: '40px', color: 'rgba(0, 255, 255, 0.2)', animation: 'float2 8s ease-in-out infinite' },
        { size: '80px', color: 'rgba(255, 0, 128, 0.2)', animation: 'float3 7s ease-in-out infinite' },
        { size: '50px', color: 'rgba(0, 255, 136, 0.2)', animation: 'float1 9s ease-in-out infinite' },
        { size: '70px', color: 'rgba(0, 255, 255, 0.3)', animation: 'float2 5s ease-in-out infinite' }
    ];
    
    shapes.forEach((shape, index) => {
        const style = shapeStyles[index];
        shape.style.cssText = `
            position: absolute;
            width: ${style.size};
            height: ${style.size};
            background: ${style.color};
            border-radius: 50%;
            animation: ${style.animation};
            left: ${20 + (index * 15)}%;
            top: ${30 + (index * 10)}%;
            filter: blur(1px);
        `;
    });
    
    // Main content
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        z-index: 10;
        position: relative;
    `;
    
    // Logo container
    const logoContainer = loader.querySelector('.logo-container');
    logoContainer.style.cssText = `
        margin-bottom: 40px;
    `;
    
    // Logo circle
    const logoCircle = loader.querySelector('.logo-circle');
    logoCircle.style.cssText = `
        width: 120px;
        height: 120px;
        margin: 0 auto;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 255, 0.1));
        border: 2px solid rgba(0, 255, 136, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        animation: logoPulse 2s ease-in-out infinite;
    `;
    
    // Logo inner
    const logoInner = loader.querySelector('.logo-inner');
    logoInner.style.cssText = `
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00ff88, #00ffff);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: logoRotate 3s linear infinite;
    `;
    
    // Logo text
    const logoText = loader.querySelector('.logo-text');
    logoText.style.cssText = `
        font-size: 2.5rem;
        font-weight: 800;
        color: #0a0a0a;
        font-family: 'Space Grotesk', sans-serif;
    `;
    
    // Loading title
    const loadingTitle = loader.querySelector('.loading-title');
    loadingTitle.style.cssText = `
        font-size: 2rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    `;
    
    // Loading dots
    const dots = loader.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.style.cssText = `
            font-size: 2rem;
            color: #00ff88;
            animation: dotPulse 1.5s ease-in-out infinite;
            animation-delay: ${index * 0.2}s;
        `;
    });
    
    // Progress container
    const progressContainer = loader.querySelector('.loading-progress-container');
    progressContainer.style.cssText = `
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    `;
    
    // Progress track
    const progressTrack = loader.querySelector('.progress-track');
    progressTrack.style.cssText = `
        width: 200px;
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
        position: relative;
    `;
    
    // Progress fill
    const progressFill = loader.querySelector('.progress-fill');
    progressFill.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #00ff88, #00ffff);
        border-radius: 3px;
        width: 0%;
        transition: width 0.3s ease;
        position: relative;
        overflow: hidden;
    `;
    
    // Add shimmer effect to progress
    const shimmer = document.createElement('div');
    shimmer.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        animation: shimmer 2s infinite;
    `;
    progressFill.appendChild(shimmer);
    
    // Progress text
    const progressText = loader.querySelector('.progress-text');
    progressText.style.cssText = `
        font-size: 1rem;
        color: #00ff88;
        font-weight: 600;
        min-width: 40px;
    `;
    
    // Loading subtitle
    const loadingSubtitle = loader.querySelector('.loading-subtitle');
    loadingSubtitle.style.cssText = `
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
    `;
    
    document.body.appendChild(loader);
    
    // Simulate loading progress with modern timing
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 8 + 2; // More realistic progress
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + '%';
        progressText.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transform = 'scale(0.95)';
                setTimeout(() => loader.remove(), 1000);
            }, 800);
        }
    }, 150);
}

// Enhanced Form Handling
function initializeEnhancedFormHandling() {
    const form = document.querySelector(".contact-form");
    const sendMessageBtn = document.getElementById("send_message");
    const successMessage = document.getElementById("message_seccess");

    if (!form) return;

    // Add input focus effects with modern animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-8px)';
            this.parentElement.style.boxShadow = '0 15px 35px rgba(0, 255, 136, 0.2)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = '';
            this.parentElement.style.boxShadow = '';
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Enhanced loading state
        const originalText = sendMessageBtn.textContent;
        sendMessageBtn.textContent = 'Sending...';
        sendMessageBtn.style.background = 'var(--gradient-secondary)';
        sendMessageBtn.disabled = true;
        sendMessageBtn.style.animation = 'pulse 1s infinite';

        let formData = new FormData(form);

        fetch("https://formspree.io/f/mqapbbrw", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Success animation with confetti effect
                form.reset();
                sendMessageBtn.textContent = 'Sent! ✓';
                sendMessageBtn.style.background = 'var(--gradient-primary)';
                sendMessageBtn.style.animation = 'successPulse 0.5s ease-out';
                
                // Create confetti effect
                createConfetti();
                
                // Show success message
                if (successMessage) {
                    successMessage.classList.add('active');
                    successMessage.style.animation = 'fadeInUp 0.5s ease-out';
                }
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    sendMessageBtn.textContent = originalText;
                    sendMessageBtn.disabled = false;
                    sendMessageBtn.style.background = '';
                    sendMessageBtn.style.animation = '';
                }, 3000);
                
            } else {
                // Error animation
                sendMessageBtn.textContent = 'Error! ✗';
                sendMessageBtn.style.background = 'linear-gradient(45deg, #ff4444, #ff6666)';
                sendMessageBtn.style.animation = 'shake 0.5s ease-out';
                
                setTimeout(() => {
                    sendMessageBtn.textContent = originalText;
                    sendMessageBtn.disabled = false;
                    sendMessageBtn.style.background = '';
                    sendMessageBtn.style.animation = '';
                }, 2000);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            sendMessageBtn.textContent = 'Error! ✗';
            sendMessageBtn.style.background = 'linear-gradient(45deg, #ff4444, #ff6666)';
            sendMessageBtn.style.animation = 'shake 0.5s ease-out';
            
            setTimeout(() => {
                sendMessageBtn.textContent = originalText;
                sendMessageBtn.disabled = false;
                sendMessageBtn.style.background = '';
                sendMessageBtn.style.animation = '';
            }, 2000);
        });
    });
}

// Confetti Effect
function createConfetti() {
    const colors = ['var(--accent-primary)', 'var(--accent-secondary)', 'var(--accent-tertiary)'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            z-index: 10000;
            animation: confettiFall 3s ease-out forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes blink {
        0%, 50% { border-color: var(--accent-primary); }
        51%, 100% { border-color: transparent; }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes successPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes confettiFall {
        0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    
    @keyframes slideInFromBottom {
        0% { transform: translateY(50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes scaleInWithBounce {
        0% { transform: scale(0.8); opacity: 0; }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes float-particle {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
        50% { transform: translateY(-30px) translateX(15px); opacity: 1; }
    }
    
    /* Modern Loading Screen Animations */
    @keyframes float1 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
        66% { transform: translateY(-10px) translateX(-15px) rotate(240deg); }
    }
    
    @keyframes float2 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        50% { transform: translateY(-30px) translateX(-20px) rotate(180deg); }
    }
    
    @keyframes float3 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-25px) translateX(15px) rotate(90deg); }
        50% { transform: translateY(-15px) translateX(-10px) rotate(180deg); }
        75% { transform: translateY(-35px) translateX(5px) rotate(270deg); }
    }
    
    @keyframes logoPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(0, 255, 136, 0.3); }
        50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(0, 255, 136, 0.5); }
    }
    
    @keyframes logoRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes dotPulse {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.2); opacity: 1; }
    }
    
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
`;
document.head.appendChild(additionalStyles);