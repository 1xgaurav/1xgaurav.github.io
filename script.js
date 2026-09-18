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
// ====================== CERTIFICATE MODAL ======================
function openCertificate(type) {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');

    let file = "";

    if (type === 'excel') {
        file = 'certificates/excel.pdf';
    } 
    else if (type === 'canva') {
        file = 'certificates/canva.pdf';
    } 
    else if (type === 'ai-era') {
        file = 'certificates/ai-era.pdf';
    }

    frame.src = file;
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
}
