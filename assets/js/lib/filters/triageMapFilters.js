class TriageMapFilters {
    constructor(onChangeCallback) {
      this.parentMapFilters = new MapFilters({
        filterNames: [
          "showTriageCenters"
        ],
        filtersElemSelector: ".triage-filters input",
        onChangeCallback: onChangeCallback
      });

      this.anyApplied = this.parentMapFilters.anyApplied;
    }

    shouldShowLocation(location) {
      if (this.parentMapFilters.state.showTriageCenters && location.isTriageCenter) {

        return true;
      }

      return false;
    }
  }
