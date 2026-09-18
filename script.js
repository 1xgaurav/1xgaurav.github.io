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

// Expand grouped skill cards when clicked or activated with the keyboard.
document.querySelectorAll('.skill-card-expandable').forEach(card => {
    const toggleSkill = () => {
        const isExpanded = card.classList.toggle('expanded');
        card.setAttribute('aria-expanded', isExpanded);
    };

    card.addEventListener('click', toggleSkill);
    card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSkill();
        }
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

    frame.src = encodeURI(file);
    modal.style.display = 'block';
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');

    modal.style.display = 'none';
    frame.src = '';
}

window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificate();
    }
};
