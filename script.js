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

    if (type === 'excel') {
        frame.src = 'certificates/excel.pdf';
    } 
    else if (type === 'canva') {
        frame.src = 'certificates/canva.pdf';
    } 
    else if (type === 'ai-era') {
        frame.src = 'certificates/ai-era.pdf';
    }

    modal.style.display = 'block';
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    const frame = document.getElementById('certificateFrame');
    
    modal.style.display = 'none';
    frame.src = ''; // PDF band karne ke liye
}

// Modal ke bahar click karne pe band ho jaye
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificate();
    }
}
