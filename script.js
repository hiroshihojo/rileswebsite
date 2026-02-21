// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Add mobile dropdown functionality
function setupMobileDropdown() {
    if (window.innerWidth <= 768) {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a:first-child');
            
            // Remove old listeners
            link.removeEventListener('click', dropdown.clickHandler);
            
            // Add new listener
            dropdown.clickHandler = function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            };
            
            link.addEventListener('click', dropdown.clickHandler);
        });
    } else {
        // Reset on desktop
        document.querySelectorAll('.dropdown.active').forEach(d => {
            d.classList.remove('active');
        });
    }
}

// Initial setup
setupMobileDropdown();

// Handle resize
window.addEventListener('resize', function() {
    setupMobileDropdown();
});