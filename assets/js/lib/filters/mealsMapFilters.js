class MealsMapFilters {
    constructor(onChangeCallback) {
      this.parentMapFilters = new MapFilters({
        filterNames: [
          "shouldHaveFree",
        ],
        filtersElemSelector: ".meals-filters input",
        onChangeCallback: onChangeCallback
      });
  
      this.anyApplied = this.parentMapFilters.anyApplied;
    }
  
    shouldShowLocation(location) {
      if (this.parentMapFilters.state.shouldHaveFree && location.hasFree) {
  
        return true;
      }
      if (this.parentMapFilters.state.shouldHavePaid && location.hasPaid) {
  
        return true;
      }
      return false;
    }
  }