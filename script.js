document.addEventListener('DOMContentLoaded', () => {
    // 1. NAVIGATION MENU
    const pawToggle = document.getElementById('pawToggle');
    const menuOverlay = document.getElementById('menuOverlay');

    pawToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuOverlay.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!menuOverlay.contains(e.target) && !pawToggle.contains(e.target)) {
            menuOverlay.classList.remove('active');
        }
    });

    // 2. PRICING MODAL
    const modal = document.getElementById('pricingModal');
    const dogCards = document.querySelectorAll('.dog-card');
    const closeModal = document.querySelector('.close-modal');
    const modalBookBtn = document.getElementById('modalBookBtn');

    dogCards.forEach(card => {
        card.addEventListener('click', () => {
            const size = card.getAttribute('data-size');
            const basic = card.getAttribute('data-basic');
            const plus = card.getAttribute('data-plus');

            document.getElementById('modalTitle').innerText = size + " Dog Packages";
            document.getElementById('basicPrice').innerText = basic;
            document.getElementById('plusPrice').innerText = plus;

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal if user clicks "Book Now" inside it
    modalBookBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal if user clicks outside of the box
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
