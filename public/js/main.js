document.addEventListener('DOMContentLoaded', () => {
    // Formatage des dates
    document.querySelectorAll('.format-date').forEach(el => {
        const dateText = el.textContent.trim();
        if (dateText && dateText !== 'Non spécifiée') {
            const date = new Date(dateText);
            if (!isNaN(date)) {
                el.textContent = date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
        }
    });

    // Animation des cartes
    document.querySelectorAll('.author-card, .feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Confirmation de suppression
    const deleteForms = document.querySelectorAll('form[action*="supprimer"]');
    deleteForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!confirm('Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible.')) {
                e.preventDefault();
            }
        });
    });
});