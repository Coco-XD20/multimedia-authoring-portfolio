/**
 * Multimedia & Authoring Portfolio
 * Main JavaScript File
 * Handles animations, navigation, and interactive features
 */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    setupScrollAnimationTriggers();
    initScrollAnimations();
});

// ============================================
// NAVIGATION
// ============================================

/**
 * Initialize mobile navigation functionality
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger?.classList.remove('active');
        });
    });

    // Update active navigation link based on current page
    updateActiveNavLink();

    // Add navbar shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });
}

/**
 * Update the active navigation link based on current page
 */
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        setupIntersectionObserver();
    } else {
        // Fallback for older browsers
        setupScrollListener();
    }
}

/**
 * Setup Intersection Observer for scroll animations
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('animate-on-scroll');

                // Stop observing this element
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.fade-in, .slide-up, .slide-left, .slide-right, .scale-up, ' +
        '.project-card, .skill-category, .gallery-item, .planet-card, ' +
        '.featured-card, .detail-card, .tool-card, .process-step, ' +
        '.video-container'
    );

    animatableElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Fallback scroll listener for older browsers
 */
function setupScrollListener() {
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll(
            '.fade-in, .slide-up, .slide-left, .slide-right, .scale-up, ' +
            '.project-card, .skill-category, .gallery-item, .planet-card, ' +
            '.featured-card, .detail-card, .tool-card, .process-step, ' +
            '.video-container'
        );

        elements.forEach(element => {
            if (!element.classList.contains('animate-on-scroll')) {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const isVisible = elementTop < window.innerHeight && elementBottom > 0;

                if (isVisible) {
                    element.classList.add('animate-on-scroll');
                }
            }
        });
    });
}

/**
 * Setup scroll animation triggers for specific elements
 */
function setupScrollAnimationTriggers() {
    const elements = {
        '.about-text': 'slide-left',
        '.about-image': 'slide-right',
        '.project-card': 'slide-up',
        '.skill-category': 'slide-up',
        '.gallery-item': 'slide-up',
        '.planet-card': 'scale-up',
        '.featured-card': 'slide-up',
        '.detail-card': 'slide-up',
        '.contact-placeholder': 'slide-up',
        '.tool-card': 'slide-up',
        '.process-step': 'slide-up'
    };

    // Add animation classes to elements
    for (const [selector, animationClass] of Object.entries(elements)) {
        const matchedElements = document.querySelectorAll(selector);
        matchedElements.forEach(element => {
            if (!element.classList.contains(animationClass)) {
                element.classList.add(animationClass);
            }
        });
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

/**
 * Smooth scroll to section when clicking anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 80; // Adjust for fixed navbar
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// MOUSE EFFECTS
// ============================================

/**
 * Add cursor glow effect on hover over interactive elements
 */
document.addEventListener('mousemove', throttle((e) => {
    const cards = document.querySelectorAll(
        '.project-card, .skill-category, .gallery-item, .planet-card, ' +
        '.featured-card, .detail-card, .tool-card, .process-step'
    );

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if mouse is over the card
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            // Add subtle glow effect (optional enhancement)
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    });
}, 100));

// ============================================
// PAGE TRANSITION EFFECTS
// ============================================

/**
 * Add fade-in effect when page loads
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

/**
 * Fade out effect when navigating to new page
 */
document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])').forEach(link => {
    link.addEventListener('click', function (e) {
        // Don't fade out for internal anchor links
        const href = this.getAttribute('href');
        if (href && href.includes('.html')) {
            // Only add fade effect for page navigation
            // This is optional and can be removed if not desired
        }
    });
});

// ============================================
// PARALLAX EFFECT
// ============================================

/**
 * Create subtle parallax effect for hero section
 */
function initParallax() {
    const heroSection = document.querySelector('.hero');

    if (heroSection) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const parallaxElements = heroSection.querySelectorAll('.stars');

            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${scrolled * 0.5}px)`;
            });
        }, 10));
    }
}

// Initialize parallax on page load
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
});

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

/**
 * Handle window resize events
 */
window.addEventListener('resize', debounce(() => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
}, 200));

// ============================================
// PERFORMANCE MONITORING
// ============================================

/**
 * Log performance metrics (optional)
 */
window.addEventListener('load', () => {
    if (window.location.hostname === 'localhost') {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page Load Time: ${pageLoadTime}ms`);
    }
});
// ============================================
// ACCESSIBILITY
// ============================================

/**
 * Handle keyboard navigation
 */
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }

    // Skip to main content on Alt+M
    if (e.altKey && e.key === 'm') {
        const mainContent = document.querySelector('main') || document.querySelector('section');
        mainContent?.focus();
    }
});

/**
 * Enhance focus visibility for keyboard navigation
 */
document.addEventListener('focusin', () => {
    document.body.classList.add('keyboard-nav');
});

document.addEventListener('focusout', () => {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// LOADER ANIMATION
// ============================================

/**
 * Initialize page loader (optional)
 */
window.addEventListener('beforeunload', () => {
    // Fade out page on navigation
    document.body.style.opacity = '0.8';
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log(
    '%cMultimedia & Authoring Portfolio',
    'color: #00d9ff; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cBuilt with HTML, CSS, and JavaScript\n%cMade for GitHub Pages deployment',
    'color: #9d4edd; font-size: 14px;',
    'color: #ff006e; font-size: 12px;'
);
