class MapFilters {
  constructor(onChangeCallback) {
    this.state = {
      shouldHaveCovidBeds: false,
      shouldHaveOxygenBeds: false,
      shouldHaveICUs: false,
      shouldHaveVentilators: false
    };
    this.setEventListeners();
    this.onChangeCallback = onChangeCallback;
  }

  getCurrentSelection() {
    return this.state;
  }

  setEventListeners() {
    let that = this;
    document.querySelectorAll(".filters_form input").forEach(function(filter_chkbx) {
      filter_chkbx.addEventListener("change", (event) => { that.filterChanged(event.target) });
    });
  }

  filterChanged(checkedCheckboxElem) {
    let filterName = checkedCheckboxElem.dataset.filterName;
    if (filterName == "show_covid_beds")  {
      this.state.shouldHaveCovidBeds = checkedCheckboxElem.checked;
    } else if (filterName == "show_oxygen_beds")  {
      this.state.shouldHaveOxygenBeds = checkedCheckboxElem.checked;
    } else if (filterName == "show_icus")  {
      this.state.shouldHaveICUs = checkedCheckboxElem.checked;
    } else if (filterName == "show_ventilators")  {
      this.state.shouldHaveVentilators = checkedCheckboxElem.checked;
    }

    this.onChangeCallback(this.state);
  }
}

export default MapFilters;
