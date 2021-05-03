class HospitalMapFilters {
  constructor(onChangeCallback) {
    this.parentMapFilters = new MapFilters({
      filterNames: [
        "shouldHaveCovidBeds",
        "shouldHaveOxygenBeds",
        "shouldHaveICUs",
        "shouldHaveVentilators"
      ],
      filtersElemSelector: ".hospital-filters input",
      onChangeCallback: onChangeCallback
    });

    this.anyApplied = this.parentMapFilters.anyApplied;
  }

  shouldShowLocation(location) {
    if ((this.parentMapFilters.state.shouldHaveCovidBeds && location.hasCovidBeds) ||
      (this.parentMapFilters.state.shouldHaveOxygenBeds && location.hasOxygenBeds) ||
      (this.parentMapFilters.state.shouldHaveICUs && location.hasICUs) ||
      (this.parentMapFilters.state.shouldHaveVentilators && location.hasVentilators)) {

      return true;
    }

    return false;
  }
}
