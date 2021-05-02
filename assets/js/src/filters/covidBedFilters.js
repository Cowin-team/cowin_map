class CovidBedFilters {
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

  shouldShowLocation(location) {
    if ((this.state.shouldHaveCovidBeds && !location.hasCovidBeds) ||
      (this.state.shouldHaveOxygenBeds && !location.hasOxygenBeds) ||
      (this.state.shouldHaveICUs && !location.hasICUs) ||
      (this.state.shouldHaveVentilators && !location.hasVentilators)) {

      return false;
    }

    return true;
  }

  setEventListeners() {
    document.querySelectorAll(".filters-form.covid-bed-filters input").forEach((filter_chkbx) => {
      filter_chkbx.addEventListener("change", (event) => { this.filterChanged(event.target) });
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

export default CovidBedFilters;
