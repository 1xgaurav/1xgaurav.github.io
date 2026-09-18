const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ====================== CERTIFICATE MODAL ======================
function openCertificate(type) {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');

    const certificates = {
        excel: 'Excel.pdf',
        canva: 'canva certificate.pdf',
        'ai-era': 'AI Era.pdf'
    };

    const file = certificates[type];
    if (!file) return;

    // encode spaces and other special characters in certificate filenames
    frame.src = encodeURI(file);
    modal.style.display = 'block';
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');

    modal.style.display = 'none';
    frame.src = '';
}

// Modal ke bahar click karne pe band ho jaye
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificate();
    }
};
