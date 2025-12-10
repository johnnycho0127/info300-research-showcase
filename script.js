document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to perform the search
    function filterProjects(searchTerm) {
        searchTerm = searchTerm.toLowerCase();

        projectCards.forEach(card => {
            // Get all the text content from the card (title, description, keywords)
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();
            // Collect text from all keyword spans
            const keywords = Array.from(card.querySelectorAll('.keyword'))
                                  .map(k => k.textContent.toLowerCase())
                                  .join(' ');
            
            // Combine all text to search against
            const combinedText = `${title} ${description} ${keywords}`;

            // Check if the search term is inside the combined text
            if (combinedText.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Listen for user input in the search box
    searchInput.addEventListener('input', (e) => {
        filterProjects(e.target.value);
    });
});
