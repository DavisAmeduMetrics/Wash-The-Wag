document.addEventListener('DOMContentLoaded', () => {
    const pawToggle = document.getElementById('pawToggle');
    const menuOverlay = document.getElementById('menuOverlay');

    // 1. OPEN/CLOSE MENU
    pawToggle.addEventListener('click', (e) => {
        // Prevents the "click outside" logic from firing immediately
        e.stopPropagation();
        menuOverlay.classList.toggle('active');
    });

    // 2. CLOSE MENU WHEN A LINK IS CLICKED
    document.querySelectorAll('.menu-overlay a').forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
    });

    // 3. CLOSE MENU IF USER CLICKS ANYWHERE ELSE
    document.addEventListener('click', (e) => {
        // Checks if the click was outside the menu and toggle button
        if (!menuOverlay.contains(e.target) && !pawToggle.contains(e.target)) {
            menuOverlay.classList.remove('active');
        }
    });

    // 4. LOG FOR TROUBLESHOOTING
    console.log("Wash the Wag site logic loaded successfully.");
});
