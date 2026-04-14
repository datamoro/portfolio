// Basic interactions
console.log("Welcome to Caiom's Portfolio");

document.addEventListener('DOMContentLoaded', () => {

    // --- Lightbox Functionality ---
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    if (galleryImages.length > 0) {
        // Create Lightbox Elements
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';

        const lightboxImg = document.createElement('img');
        lightbox.appendChild(lightboxImg);

        const closeBtn = document.createElement('div');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '&times;';
        lightbox.appendChild(closeBtn);

        document.body.appendChild(lightbox);

        // Open Lightbox
        galleryImages.forEach(img => {
            img.addEventListener('click', e => {
                lightboxImg.src = e.target.src;
                lightboxImg.classList.remove('zoomed'); // reset zoom
                lightbox.classList.add('active');
            });
        });

        // Zoom toggle on image click
        lightboxImg.addEventListener('click', e => {
            e.stopPropagation(); // prevent closing
            lightboxImg.classList.toggle('zoomed');
        });

        // Close Lightbox (click outside or on close button)
        lightbox.addEventListener('click', e => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }
});
