// VALIDASI FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("result");

    // VALIDASI
    if (name === "" || email === "" || message === "") {
        alert("Semua field harus diisi!");
        return;
    }

    // VALIDASI EMAIL
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Format email tidak valid!");
        return;
    }

    // ALERT SUKSES
    alert("Pesan berhasil dikirim!");

    // TAMPILKAN DATA
    result.innerHTML = `
        <h3>Data Terkirim:</h3>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Pesan:</b> ${message}</p>
    `;

    // RESET FORM
    document.getElementById("contactForm").reset();
});


// ANIMASI SKILL SAAT SCROLL
let bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
    bars.forEach(bar => {
        let position = bar.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if (position < screen) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});


// SMOOTH SCROLL DENGAN OFFSET
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// ANIMASI NAVBAR SAAT SCROLL
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});