function filterChanged(event) {
  let checkedFilters = document.querySelectorAll(".filters_form input:checked")
  let checkedFilterNames = [];
  checkedFilters.forEach(function(checkedCheckbox){
    checkedFilterNames.push(checkedCheckbox.dataset.filterName);
  })

  var event = new CustomEvent("filtersChanged", { detail: { checkedFilterNames: checkedFilterNames } });
  window.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll(".filters_form input").forEach(function(filter_chkbx) {
    console.log(filter_chkbx);
    filter_chkbx.addEventListener("change", filterChanged);
  })
});

