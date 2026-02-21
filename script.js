// Mobile menu toggle (your existing code)
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Add mobile dropdown functionality
if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a:first-child');
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    });
}

// Handle resize to reset mobile-specific behaviors
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // Reset any active mobile dropdowns
        document.querySelectorAll('.dropdown.active').forEach(d => {
            d.classList.remove('active');
        });
    }
});