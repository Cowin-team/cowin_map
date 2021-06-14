window.addEventListener('DOMContentLoaded', (event) => {
  let dropdowns = document.querySelectorAll('.dropdown .dropdown-trigger');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.closest(".dropdown").classList.toggle('is-active');
    });

  });

    //Collapse navbar with burger icon in narrower screens
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  //Toggle the details div using "Click for details"
  const targetDivM = document.getElementById("toggledDetailsMobile");
  const targetDivD = document.getElementById("toggledDetailsDesktop");
  const btn = document.getElementById("toggleButton");
  const clickToOpenTextSpan = document.querySelector("#toggleButton .clickToOpenText");
  const clickToCloseTextSpan = document.querySelector("#toggleButton .clickToCloseText");

  // if supported touch, otherwise click event:
  btn.addEventListener("click", () => {
    clickToOpenTextSpan.classList.toggle("is-hidden");
    clickToCloseTextSpan.classList.toggle("is-hidden");

    targetDivM.classList.toggle("is-hidden");
    targetDivD.classList.toggle("is-hidden");
  });

  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function(event) {
      window.sessionStorage.setItem("cb-"+checkbox.name, checkbox.checked);
    });
  })
});
