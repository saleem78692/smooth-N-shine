/**
 * Smooth N Shine Aesthetics Home Service
 * main.js - Core interactive scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Navbar Link based on URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-menu .dropdown-item');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href === currentPath) {
            link.classList.add('active');
            // If link is inside dropdown, mark top level nav item active too
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('.nav-link');
                if (parentLink) parentLink.classList.add('active');
            }
        }
    });

    // 2. Booking Modal Service Auto-Select
    const bookingModalEl = document.getElementById('bookingModal');
    if (bookingModalEl) {
        bookingModalEl.addEventListener('show.bs.modal', (event) => {
            const button = event.relatedTarget;
            if (button) {
                const serviceName = button.getAttribute('data-service');
                if (serviceName) {
                    const serviceSelect = document.getElementById('bookingService');
                    if (serviceSelect) {
                        for (let option of serviceSelect.options) {
                            if (option.value.toLowerCase().includes(serviceName.toLowerCase()) || option.text.toLowerCase().includes(serviceName.toLowerCase())) {
                                option.selected = true;
                                break;
                            }
                        }
                    }
                }
            }
        });
    }

    // 3. Booking Form Submission Handling
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const alertBox = document.getElementById('bookingAlert');
            if (alertBox) {
                alertBox.classList.remove('d-none');
                alertBox.classList.add('alert-success');
                alertBox.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i> Thank you! Your home service appointment has been booked. Our expert coordinator will call you shortly to confirm doctor availability.';
                bookingForm.reset();
            }
        });
    }

    // 4. Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const contactAlert = document.getElementById('contactAlert');
            if (contactAlert) {
                contactAlert.classList.remove('d-none');
                contactAlert.classList.add('alert-success');
                contactAlert.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i> Your message has been sent successfully! Our team will get back to you within 2 hours.';
                contactForm.reset();
            }
        });
    }

    // 4b. Enquiry Form Submission Handling
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const modalBody = enquiryForm.closest('.modal-body');
            let enquiryAlert = document.getElementById('enquiryAlert');
            if (!enquiryAlert && modalBody) {
                enquiryAlert = document.createElement('div');
                enquiryAlert.id = 'enquiryAlert';
                enquiryAlert.className = 'alert alert-success mt-3 mb-0';
                modalBody.appendChild(enquiryAlert);
            }
            if (enquiryAlert) {
                enquiryAlert.classList.remove('d-none');
                enquiryAlert.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i> Thank you! Your enquiry has been received. Our team will contact you shortly.';
                enquiryForm.reset();
            }
        });
    }

    // Auto close offcanvas on mobile when clicking internal page link
    const offcanvasEl = document.getElementById('offcanvasNavbar');
    if (offcanvasEl) {
        const offcanvasLinks = offcanvasEl.querySelectorAll('.dropdown-item, .nav-link:not(.dropdown-toggle)');
        offcanvasLinks.forEach(link => {
            link.addEventListener('click', () => {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
                if (bsOffcanvas) bsOffcanvas.hide();
            });
        });
    }


    // 5. Initialize minimum date for booking input to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // 6. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

    // 7. Initialize Facial Treatment Swiper
    var facialSwiper = new Swiper(".facialSwiper", {
        slidesPerView: 3,
        spaceBetween: 24,

        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".facial-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".facial-next",
            prevEl: ".facial-prev",
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },

            576: {
                slidesPerView: 2,
                spaceBetween: 18,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            }

        }
    });
