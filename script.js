document.addEventListener('DOMContentLoaded', () => {
    // PAW MENU LOGIC
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

    // PRICING MODAL LOGIC
    const modal = document.getElementById('pricingModal');
    const dogCards = document.querySelectorAll('.dog-card');
    const closeBtns = document.querySelectorAll('.close-modal');

    dogCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get data from the clicked card
            const size = card.getAttribute('data-size');
            const basic = card.getAttribute('data-basic');
            const plus = card.getAttribute('data-plus');

            // Fill the modal
            document.getElementById('modalTitle').innerText = size + " Package Details";
            document.getElementById('basicPrice').innerText = basic;
            document.getElementById('plusPrice').innerText = plus;

            // Show modal
            modal.style.display = 'block';
        });
    });

    // Close modal logic
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
