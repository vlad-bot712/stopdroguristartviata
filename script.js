function showSection(sectionId) {
    // Obține secțiunea respectivă
    const sectionContent = document.getElementById(sectionId);

    // Afișează secțiunea într-o modală
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content-section');

    // Adaugă conținutul secțiunii în modală
    modalContent.innerHTML = sectionContent.innerHTML;

    // Afișează modalul
    modal.style.display = "block";
}

// Închide modalul
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function subscribeNewsletter(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('newsletter-email');
    const message = document.getElementById('newsletter-message');

    // Afișează mesajul de bun venit
    if (emailInput.value.trim() !== "") {
        message.classList.remove('hidden'); // Asigură-te că mesajul este vizibil
        message.textContent = `Bun venit, ${emailInput.value.trim()}! Ești acum abonat!`;
        emailInput.value = ""; // Resetează câmpul de email
    }
}


let currentSponsorIndex = 0;

function changeSponsor(direction) {
    const sponsors = document.querySelectorAll('.sponsor-item');
    sponsors[currentSponsorIndex].classList.remove('active');

    // Actualizează indexul curent
    currentSponsorIndex += direction;

    // Asigură-te că indexul este în limitele corecte
    if (currentSponsorIndex < 0) {
        currentSponsorIndex = sponsors.length - 1; // Revine la ultimul sponsor
    } else if (currentSponsorIndex >= sponsors.length) {
        currentSponsorIndex = 0; // Revine la primul sponsor
    }

    sponsors[currentSponsorIndex].classList.add('active');
}







// Variabile pentru buton și imagini
const stopButton = document.getElementById('stopAnimationBtn');
const rotatingImages = document.querySelectorAll('.rotating-img');

// Funcție pentru a porni animația (la intrarea în secțiune)
function startAnimation() {
    rotatingImages.forEach(image => {
        image.style.animationPlayState = 'running'; // Pornim animația
    });
}

// Funcție pentru a opri animația
function stopAnimation() {
    rotatingImages.forEach(image => {
        image.style.animationPlayState = 'paused'; // Oprim animația
    });
}

// Când se apasă pe buton, oprește animația
stopButton.addEventListener('click', stopAnimation);

// Detectăm când utilizatorul ajunge în secțiunea "Mai multe" (scroll)
const sectionMaiMulte = document.getElementById('mai-multe');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startAnimation(); // Pornește animația când secțiunea devine vizibilă
        }
    });
}, { threshold: 0.5 });

observer.observe(sectionMaiMulte);



// Toggle meniul din navbar
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
  }
  



  function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
  }
  