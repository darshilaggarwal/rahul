// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Transform hamburger to X
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('animate-bar1');
    bars[1].classList.toggle('animate-bar2');
    bars[2].classList.toggle('animate-bar3');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger
        const bars = document.querySelectorAll('.bar');
        bars[0].classList.remove('animate-bar1');
        bars[1].classList.remove('animate-bar2');
        bars[2].classList.remove('animate-bar3');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or use user's system preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
    htmlElement.classList.add('dark-theme');
    darkModeToggle.checked = true;
}

// Toggle dark/light mode
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        htmlElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Form submission handling (for demo purposes)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted with the following data:');
        console.log({ name, email, subject, message });
        
        // Show success message (for demo)
        alert('Thank you for your message! This is a demo form, so no actual email was sent.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add animations for hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .bar {
            transition: 0.3s;
        }
        
        .animate-bar1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .animate-bar2 {
            opacity: 0;
        }
        
        .animate-bar3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-item, .about-image, .hackathon-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Add the animation class styles
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .skill-item, .about-image, .hackathon-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Initial check on page load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 