class TriageMapFilters {
    constructor(onChangeCallback) {
      this.parentMapFilters = new MapFilters({
        filterNames: [
        ],
        filtersElemSelector: ".triage-filters input",
        onChangeCallback: onChangeCallback
      });
  
      this.anyApplied = this.parentMapFilters.anyApplied;
    }
  
    shouldShowLocation(location) {
        return true;
    }
  }