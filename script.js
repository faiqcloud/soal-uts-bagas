// TOGGLE MENU MOBILE
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});



window.addEventListener('scroll', () => {
    const section = document.getElementById('skills');
    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        showSkills();
    }
});

// FORM VALIDATION
const form = document.getElementById('contactForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === "" || email === "" || message === "") {
        result.innerHTML = "<p style='color:red'>Semua field wajib diisi!</p>";
    } else {
        result.innerHTML = "<p style='color:lightgreen'>Pesan berhasil dikirim!</p>";
        form.reset();
    }
});