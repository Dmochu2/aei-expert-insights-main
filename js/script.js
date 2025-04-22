console.log('UAI Website script loaded!');

document.addEventListener('DOMContentLoaded', () => {
    // Selectors for Apply Modal
    const applyModalOverlay = document.getElementById('apply-modal-overlay');
    const applyModal = document.getElementById('apply-modal');
    const closeApplyModalBtn = applyModal?.querySelector('.modal-close-btn'); // Use optional chaining
    const openApplyBtns = Array.from(document.querySelectorAll('button.btn.btn-primary')).filter(btn =>
        btn.textContent.includes('Apply now') || btn.textContent.includes('Apply Now')
    );

    // Selectors for Contact Modal
    const contactModalOverlay = document.getElementById('contact-modal-overlay');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModalBtn = contactModal?.querySelector('.modal-close-btn'); // Use optional chaining
    const openContactBtn = document.getElementById('open-contact-modal-btn');

    // Selectors for Mobile Nav
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.navbar-links');

    // Generic Open/Close Functions
    const openModal = (overlayElement) => {
        if (overlayElement) {
            overlayElement.classList.remove('modal-hidden');
        }
    };

    const closeModal = (overlayElement) => {
        if (overlayElement) {
            overlayElement.classList.add('modal-hidden');
        }
    };

    // --- Apply Modal Listeners ---
    openApplyBtns.forEach(btn => {
        btn.addEventListener('click', () => openModal(applyModalOverlay));
    });

    if (closeApplyModalBtn) {
        closeApplyModalBtn.addEventListener('click', () => closeModal(applyModalOverlay));
    }

    if (applyModalOverlay) {
        applyModalOverlay.addEventListener('click', (event) => {
            if (event.target === applyModalOverlay) {
                closeModal(applyModalOverlay);
            }
        });
    }

    // --- Contact Modal Listeners ---
    if (openContactBtn) {
        openContactBtn.addEventListener('click', () => openModal(contactModalOverlay));
    }

    if (closeContactModalBtn) {
        closeContactModalBtn.addEventListener('click', () => closeModal(contactModalOverlay));
    }

    if (contactModalOverlay) {
        contactModalOverlay.addEventListener('click', (event) => {
            if (event.target === contactModalOverlay) {
                closeModal(contactModalOverlay);
            }
        });
    }

    // --- Global Listener (Escape Key) ---
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (applyModalOverlay && !applyModalOverlay.classList.contains('modal-hidden')) {
                closeModal(applyModalOverlay);
            }
            if (contactModalOverlay && !contactModalOverlay.classList.contains('modal-hidden')) {
                closeModal(contactModalOverlay);
            }
        }
    });

    // --- Mobile Nav Toggle Listener ---
    if (mobileNavToggleBtn && navLinks) {
        mobileNavToggleBtn.addEventListener('click', () => {
            const isExpanded = mobileNavToggleBtn.getAttribute('aria-expanded') === 'true';
            mobileNavToggleBtn.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('mobile-nav-active');
        });
    }
});
