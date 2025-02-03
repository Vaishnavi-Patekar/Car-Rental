document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const searchTerm = document.getElementById('search-input').value;
        // Perform search operation using the search term
        console.log('Search term:', searchTerm);
        // You can replace the console.log with your actual search logic
    });
});
