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

