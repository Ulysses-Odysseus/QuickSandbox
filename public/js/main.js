// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to environment cards
    const environmentCards = document.querySelectorAll('.environment-card');
    
    environmentCards.forEach(card => {
        card.addEventListener('click', () => {
            const environment = card.querySelector('h3').textContent.toLowerCase();
            // You can add navigation logic here
            console.log(`Selected environment: ${environment}`);
            window.location.href = `/${environment}`;
        });
    });
}); 