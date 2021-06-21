class PharmaMapFilters {
    constructor(onChangeCallback) {
      this.parentMapFilters = new MapFilters({
        filterNames: [
          "showPharmaCenters"
        ],
        filtersElemSelector: ".pharma-filters input",
        onChangeCallback: onChangeCallback
      });

      this.anyApplied = this.parentMapFilters.anyApplied;
    }

    shouldShowLocation(location) {
      if (this.parentMapFilters.state.shouldBeGovt && location.isGovt) {
  
        return true;
      }
      if (this.parentMapFilters.state.shouldBePrivate && location.isPrivate) {
  
        return true;
      }
      return false;
    }
  }
