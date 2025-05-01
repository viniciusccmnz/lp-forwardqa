// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Page loader
    const pageLoader = document.querySelector('.page-loader');
    
    // Hide loader after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            pageLoader.classList.add('loaded');
        }, 800);
    });
    
    // Elements
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    const contactForm = document.querySelector('.minimal-form');
    const ctaButton = document.querySelector('.cta-button');
    const whatsappButton = document.querySelector('.whatsapp-button');
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Mobile Navigation Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Scroll Event - Header Sticky Effect & Back to Top Button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Show back to top button after scrolling 300px
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // WhatsApp button click handler
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = '+5521999999999'; // Replace with actual WhatsApp number
            const message = encodeURIComponent('Hello ForwardQA, I would like to know more about your QA services.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }
    
    // Handle Contact Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            // Display loading state
            const submitButton = contactForm.querySelector('.minimal-button');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<span class="loading-spinner"></span>Sending...';
            submitButton.disabled = true;
            
            // Get form data to send
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            
            // Send data to Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Hide form and show success message
                const formContent = document.querySelector('.contact-form-column');
                const successMessage = document.createElement('div');
                successMessage.classList.add('form-success');
                successMessage.innerHTML = `
                    <div class="success-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. We'll get back to you shortly.</p>
                    <button class="return-button">Send Another Message</button>
                `;
                
                formContent.innerHTML = '';
                formContent.appendChild(successMessage);
                
                // Fade in animation
                setTimeout(() => {
                    successMessage.classList.add('active');
                }, 10);
                
                // Return button functionality
                const returnButton = successMessage.querySelector('.return-button');
                returnButton.addEventListener('click', () => {
                    location.reload();
                });
            })
            .catch(error => {
                // Show error message
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                showNotification('Failed to send message. Please try again.', 'error');
                console.error('Error:', error);
            });
        });
    }
    
    // Animation on scroll
    const fadeInElements = document.querySelectorAll('.fade-in');
    const fadeInRightElements = document.querySelectorAll('.fade-in-right');
    const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
    
    // Apply initial animation styles
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    fadeInRightElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateX(-30px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    fadeInLeftElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateX(30px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    // Animation on scroll
    const animateElements = () => {
        const elements = document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-left');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translate(0)';
            }
        });
    };
    
    // Run animations on scroll
    window.addEventListener('scroll', animateElements);
    
    // Run once initially
    animateElements();
    
    // Contact Section Functionality
    const formTabs = document.querySelectorAll('.form-tab');
    const formContents = document.querySelectorAll('.form-content');
    const locationBtn = document.querySelector('.location-btn');
    const mapModal = document.getElementById('location-map');
    const closeMapBtn = document.querySelector('.close-map');
    const messageForm = document.getElementById('message-form');
    const callbackForm = document.getElementById('callback-form');
    
    // Form tabs switching
    if (formTabs.length > 0) {
        formTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const formType = tab.getAttribute('data-form');
                
                // Update active tab
                formTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding form content
                formContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.classList.contains(formType + '-form')) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Map modal functionality
    if (locationBtn && mapModal && closeMapBtn) {
        locationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mapModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
        
        closeMapBtn.addEventListener('click', () => {
            mapModal.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close modal when clicking outside the content
        mapModal.addEventListener('click', (e) => {
            if (e.target === mapModal) {
                mapModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mapModal.classList.contains('active')) {
                mapModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Message form submission
    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(messageForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Validate fields
            if (!name || !email || !subject || !message) {
                showFormNotification(messageForm, 'Please fill in all fields', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = messageForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending (replace with actual API call)
            setTimeout(() => {
                // Success state
                submitBtn.innerHTML = '<span class="btn-icon"><i class="fas fa-check"></i></span> Sent Successfully';
                submitBtn.style.backgroundColor = '#28a745';
                
                showFormNotification(messageForm, 'Your message has been sent successfully!', 'success');
                
                // Reset form after delay
                setTimeout(() => {
                    messageForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                }, 2000);
            }, 1500);
        });
    }
    
    // Callback form submission
    if (callbackForm) {
        callbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(callbackForm);
            const name = formData.get('callback-name');
            const phone = formData.get('phone');
            const bestTime = formData.get('best-time');
            
            // Validate fields
            if (!name || !phone || !bestTime) {
                showFormNotification(callbackForm, 'Please fill in all required fields', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = callbackForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span> Processing...';
            submitBtn.disabled = true;
            
            // Simulate sending (replace with actual API call)
            setTimeout(() => {
                // Success state
                submitBtn.innerHTML = '<span class="btn-icon"><i class="fas fa-check"></i></span> Request Sent';
                submitBtn.style.backgroundColor = '#28a745';
                
                showFormNotification(callbackForm, 'Your callback request has been scheduled!', 'success');
                
                // Reset form after delay
                setTimeout(() => {
                    callbackForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                }, 2000);
            }, 1500);
        });
    }
    
    // Show notification function
    function showNotification(message, type = 'success') {
        // Remove any existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.remove();
        });
        
        // Create notification element
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <p>${message}</p>
            </div>
        `;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Fade in
        setTimeout(() => {
            notification.classList.add('active');
        }, 10);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('active');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }
    
    // Back to top button click event
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Theme toggle logic
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
        }
        localStorage.setItem('theme', theme);
    }

    // Inicializa tema
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark' ? 'dark' : 'light');

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = body.classList.contains('theme-dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }
});

// Back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (this.scrollY >= 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// File input customization
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('resume');
    const fileLabel = document.querySelector('.file-label');
    
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0) {
                fileLabel.textContent = fileInput.files[0].name;
            } else {
                fileLabel.textContent = 'Selecionar arquivo...';
            }
        });
    }
});

// Form handling for contact section
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                // alert('Please fill in all fields.');
                return;
            }
            
            // Submit form using Formspree
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    // alert('Message sent successfully! We will get back to you soon.');
                } else {
                    throw new Error('Error sending the form.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // alert('There was an error sending your message. Please try again later.');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Fecha o menu mobile ao clicar fora
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    if (
        navLinks && hamburger &&
        navLinks.classList.contains('active') &&
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}); 