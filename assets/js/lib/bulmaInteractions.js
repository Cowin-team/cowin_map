window.addEventListener('DOMContentLoaded', (event) => {
  let dropdowns = document.querySelectorAll('.dropdown .dropdown-trigger');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.closest(".dropdown").classList.toggle('is-active');
    });
  });
});


const targetDivM = document.getElementById("toggledDetailsMobile");
const targetDivD = document.getElementById("toggledDetailsDesktop");
const btn = document.getElementById("toggleButton");
btn.onclick = function () {
if (targetDivM.style.display !== "none") {
targetDivM.style.display = "none";
} else {
targetDivM.style.display = "block";
}
if (targetDivD.style.display !== "none") {
  targetDivD.style.display = "none";
  } else {
  targetDivD.style.display = "block";
  }
};
