window.addEventListener('DOMContentLoaded', (event) => {
  let selectAllElem  = document.querySelector('input.selectAllFiltersToggle');
  let allTargetElems = document.querySelectorAll(selectAllElem.dataset.targetInputsSelector);

  allTargetElems.forEach((targetElem) => {
    targetElem.addEventListener("change", function(event) {
      if (event.target.checked != true) {
        selectAllElem.checked = false;
      }
    });
  });

  selectAllElem.addEventListener("change", function(event){
    event.stopPropagation();

    allTargetElems.forEach((input) => {
      if (input != event.target) {
        input.checked = event.target.checked;
        input.dispatchEvent(new Event('change'));
      }
    });
  });
});
