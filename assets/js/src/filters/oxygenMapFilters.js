import MapFilters from "./mapFilters"

class OxygenMapFilters {
  constructor(onChangeCallback) {
    this.parentMapFilters = new MapFilters({
      filterNames: [
        "shouldHaveRefilling",
        "shouldHaveCylinders",
        "shouldHaveCans",
        "shouldHaveConcentrator"
      ],
      filtersElemSelector: ".oxygen-filters input",
      onChangeCallback: onChangeCallback
    });

    this.anyApplied = this.parentMapFilters.anyApplied;
  }

  shouldShowLocation(location) {
    if ((this.parentMapFilters.state.shouldHaveRefilling && location.hasRefilling) ||
      (this.parentMapFilters.state.shouldHaveCylinders && location.hasCylinders) ||
      (this.parentMapFilters.state.shouldHaveCans && location.hasCans) ||
      (this.parentMapFilters.state.shouldHaveConcentrator && location.hasConcentrator)) {

      return true;
    }

    return false;
  }
}

export default OxygenMapFilters;
