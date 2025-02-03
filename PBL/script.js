document.addEventListener('DOMContentLoaded', function() {
  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navbar = document.querySelector('[data-navbar]');

  // Function to toggle the mobile navigation menu
  function toggleNav() {
    navbar.classList.toggle('active');
  }

  // Event listener for the navigation toggle button
  navToggleBtn.addEventListener('click', toggleNav);

  // Close the mobile navigation menu when a link is clicked
  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('active');
    });
  });
});
