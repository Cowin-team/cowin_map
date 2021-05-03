window.addEventListener('DOMContentLoaded', (event) => {
  let dropdowns = document.querySelectorAll('.dropdown .dropdown-trigger');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.closest(".dropdown").classList.toggle('is-active');
    });
  });
});
