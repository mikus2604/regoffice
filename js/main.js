/**
 * RegStreet - Main JavaScript
 * Handles navigation, form validation, and interactive elements
 */

// ========================================
// Mobile Navigation Toggle
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Update ARIA attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only prevent default if it's not just "#"
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 80; // Account for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form elements
        const formSuccess = document.getElementById('formSuccess');
        const formError = document.getElementById('formError');
        const submitButton = contactForm.querySelector('button[type="submit"]');

        // Basic validation
        if (!validateForm()) {
            return;
        }

        // Disable submit button to prevent double submission
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // In a real implementation, you would send this to a server
        // For now, we'll simulate a successful submission
        setTimeout(() => {
            // Hide the form
            contactForm.style.display = 'none';

            // Show success message
            formSuccess.style.display = 'block';

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Optional: Log form data (remove in production)
            console.log('Form submitted with data:', data);

            // Reset form after 5 seconds (optional)
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.style.display = 'none';
                submitButton.disabled = false;
                submitButton.textContent = 'Send Enquiry';
            }, 10000);

        }, 1000); // Simulate network delay

        // Uncomment below for actual form submission to server
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(error => {
            console.error('Error:', error);
            formError.style.display = 'block';
            submitButton.disabled = false;
            submitButton.textContent = 'Send Enquiry';
        });
        */
    });

    // Form validation function
    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            // Remove previous error styling
            field.style.borderColor = '';

            // Check if field is empty
            if (!field.value.trim()) {
                field.style.borderColor = '#DC2626';
                isValid = false;
            }

            // Email validation
            if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    field.style.borderColor = '#DC2626';
                    isValid = false;
                }
            }
        });

        // GDPR consent validation
        const gdprConsent = document.getElementById('gdprConsent');
        if (gdprConsent && !gdprConsent.checked) {
            alert('Please agree to the Privacy Policy to continue.');
            isValid = false;
        }

        if (!isValid) {
            // Scroll to first error
            const firstError = contactForm.querySelector('[style*="border-color: rgb(220, 38, 38)"]');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }

        return isValid;
    }

    // Real-time validation feedback
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#DC2626';
            } else if (this.type === 'email' && this.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.style.borderColor = emailRegex.test(this.value) ? '#10B981' : '#DC2626';
            } else if (this.value.trim()) {
                this.style.borderColor = '#10B981';
            } else {
                this.style.borderColor = '';
            }
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = '#0066CC';
        });
    });
}

// ========================================
// URL Parameter Handler (for pre-selecting services)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const packageParam = urlParams.get('package');

    const serviceSelect = document.getElementById('service');

    if (serviceSelect) {
        if (service) {
            // Map service parameter to select option value
            const serviceMap = {
                'registered-office': 'registered-office',
                'directors-address': 'directors-address',
                'mail-forwarding': 'mail-forwarding',
                'company-formation': 'company-formation'
            };

            if (serviceMap[service]) {
                serviceSelect.value = serviceMap[service];
            }
        }

        if (packageParam) {
            // Map package parameter to select option value
            const packageMap = {
                'startup': 'package-startup',
                'business': 'package-business',
                'enterprise': 'package-enterprise'
            };

            if (packageMap[packageParam]) {
                serviceSelect.value = packageMap[packageParam];
            }
        }
    }
});

// ========================================
// Scroll-to-Top Button (Optional Enhancement)
// ========================================
function addScrollToTopButton() {
    // Create button element
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #0066CC;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment to enable scroll-to-top button
// addScrollToTopButton();

// ========================================
// FAQ Accordion (if implemented)
// ========================================
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');

        if (question) {
            question.style.cursor = 'pointer';
            question.style.userSelect = 'none';

            question.addEventListener('click', function() {
                const answer = item.querySelector('p');

                if (answer) {
                    const isOpen = answer.style.display === 'block';

                    // Close all other FAQs (optional - comment out for multiple open)
                    document.querySelectorAll('.faq-item p').forEach(p => {
                        p.style.display = 'none';
                    });

                    // Toggle current FAQ
                    answer.style.display = isOpen ? 'none' : 'block';
                }
            });
        }
    });
}

// Uncomment to enable FAQ accordion
// initFAQAccordion();

// ========================================
// Form Auto-save to localStorage (Optional)
// ========================================
function enableFormAutoSave(formId) {
    const form = document.getElementById(formId);

    if (!form) return;

    const storageKey = `form_autosave_${formId}`;

    // Load saved data
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const field = form.elements[key];
                if (field) {
                    if (field.type === 'checkbox') {
                        field.checked = data[key];
                    } else {
                        field.value = data[key];
                    }
                }
            });
        } catch (e) {
            console.error('Error loading saved form data:', e);
        }
    }

    // Save data on input
    form.addEventListener('input', function() {
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        localStorage.setItem(storageKey, JSON.stringify(data));
    });

    // Clear saved data on successful submission
    form.addEventListener('submit', function() {
        setTimeout(() => {
            localStorage.removeItem(storageKey);
        }, 2000);
    });
}

// Uncomment to enable auto-save for contact form
// enableFormAutoSave('contactForm');

// ========================================
// Analytics Event Tracking (Optional)
// ========================================
function trackEvent(category, action, label) {
    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    // Console log for development
    console.log('Event tracked:', { category, action, label });
}

// Track button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('Button', 'Click', buttonText);
    });
});

// Track service card interactions
document.querySelectorAll('.service-card, .pricing-card').forEach(card => {
    card.addEventListener('click', function() {
        const cardTitle = this.querySelector('h3')?.textContent.trim();
        if (cardTitle) {
            trackEvent('Service Card', 'Click', cardTitle);
        }
    });
});

// ========================================
// Performance Monitoring
// ========================================
if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });

    try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
        // Browser doesn't support this metric
    }
}

// Log page load time
window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', pageLoadTime + 'ms');
});

// ========================================
// Accessibility: Skip to Main Content
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #001F3F;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;

    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });

    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
});

// ========================================
// Sandwell Hub Tooltip - Keyboard Accessibility
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const infoIcon = document.querySelector('.sandwell-hub-benefit-box .info-icon');
    const tooltip = document.querySelector('.sandwell-hub-benefit-box .disclaimer-tooltip');

    if (infoIcon && tooltip) {
        // Keyboard accessibility - show tooltip on focus
        infoIcon.addEventListener('focus', function() {
            tooltip.style.opacity = '1';
            tooltip.style.pointerEvents = 'auto';
        });

        infoIcon.addEventListener('blur', function() {
            tooltip.style.opacity = '0';
            tooltip.style.pointerEvents = 'none';
        });

        // Handle viewport overflow on mobile
        function adjustTooltipPosition() {
            const tooltipRect = tooltip.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // If tooltip overflows right edge
            if (tooltipRect.right > viewportWidth) {
                tooltip.style.left = 'auto';
                tooltip.style.right = '0';
                tooltip.style.transform = 'none';
            }

            // If tooltip overflows left edge
            if (tooltipRect.left < 0) {
                tooltip.style.left = '0';
                tooltip.style.right = 'auto';
                tooltip.style.transform = 'none';
            }
        }

        // Adjust position when showing tooltip
        infoIcon.addEventListener('mouseenter', adjustTooltipPosition);
        infoIcon.addEventListener('focus', adjustTooltipPosition);

        // Allow Enter and Space to toggle tooltip when focused
        infoIcon.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isVisible = tooltip.style.opacity === '1';
                tooltip.style.opacity = isVisible ? '0' : '1';
                tooltip.style.pointerEvents = isVisible ? 'none' : 'auto';
            }

            // Close tooltip with Escape key
            if (e.key === 'Escape') {
                tooltip.style.opacity = '0';
                tooltip.style.pointerEvents = 'none';
            }
        });
    }
});

// ========================================
// Pricing Toggle - Monthly/Yearly
// ========================================
(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPricingToggle);
    } else {
        initPricingToggle();
    }

    function initPricingToggle() {
        const pricingToggle = document.getElementById('pricingToggle');
        const pricingCards = document.querySelectorAll('.pricing-price');
        const toggleLabels = document.querySelectorAll('.pricing-toggle-container .toggle-label');

        console.log('=== Pricing Toggle Debug ===');
        console.log('Toggle element:', pricingToggle);
        console.log('Pricing cards:', pricingCards.length);
        console.log('Labels:', toggleLabels.length);

        if (!pricingToggle) {
            console.log('No pricing toggle found on this page');
            return;
        }

        if (pricingCards.length === 0) {
            console.log('No pricing cards found on this page');
            return;
        }

        // Set initial state - monthly is active
        if (toggleLabels.length >= 1) {
            toggleLabels[0].classList.add('active');
        }

        // Add change event listener
        pricingToggle.addEventListener('change', function(e) {
            const isYearly = e.target.checked;
            console.log('Toggle switched to:', isYearly ? 'YEARLY' : 'MONTHLY');

            // Update label styling
            if (toggleLabels.length >= 2) {
                toggleLabels[0].classList.toggle('active', !isYearly);
                toggleLabels[1].classList.toggle('active', isYearly);
            }

            // Update all pricing displays
            pricingCards.forEach((priceCard, index) => {
                const monthlyPrice = priceCard.dataset.monthly;
                const yearlyPrice = priceCard.dataset.yearly;
                const suffix = priceCard.dataset.suffix || '';

                const amountEl = priceCard.querySelector('.amount');
                const periodEl = priceCard.querySelector('.period');

                if (amountEl && periodEl) {
                    if (isYearly) {
                        amountEl.textContent = yearlyPrice;
                        periodEl.textContent = '/year' + suffix;
                        console.log(`Card ${index}: £${yearlyPrice}/year${suffix}`);
                    } else {
                        amountEl.textContent = monthlyPrice;
                        periodEl.textContent = '/month' + suffix;
                        console.log(`Card ${index}: £${monthlyPrice}/month${suffix}`);
                    }
                }
            });
        });

        console.log('Pricing toggle initialized successfully!');
    }
})();

// ========================================
// Horizontal Scroll Indicator for Add-Ons
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const costsGridWrapper = document.querySelector('.costs-grid-wrapper');
    const costsGrid = document.querySelector('.costs-grid');

    if (costsGridWrapper && costsGrid) {
        function checkScroll() {
            // Check if content is scrollable
            const hasScroll = costsGrid.scrollWidth > costsGrid.clientWidth;

            if (hasScroll) {
                costsGridWrapper.classList.add('has-scroll');
            } else {
                costsGridWrapper.classList.remove('has-scroll');
            }
        }

        // Check on load
        checkScroll();

        // Check on window resize
        window.addEventListener('resize', checkScroll);

        // Remove gradient when scrolled to the end
        costsGrid.addEventListener('scroll', function() {
            const scrolledToEnd = Math.abs(
                costsGrid.scrollWidth - costsGrid.clientWidth - costsGrid.scrollLeft
            ) < 5;

            if (scrolledToEnd) {
                costsGridWrapper.classList.remove('has-scroll');
            } else if (costsGrid.scrollWidth > costsGrid.clientWidth) {
                costsGridWrapper.classList.add('has-scroll');
            }
        });
    }
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%cRegStreet', 'font-size: 20px; font-weight: bold; color: #001F3F;');
console.log('%cProfessional UK Business Address Services', 'font-size: 14px; color: #0066CC;');
console.log('Website: https://regstreet.co.uk');
console.log('Email: hello@regstreet.co.uk');
