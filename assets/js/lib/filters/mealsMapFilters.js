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
    //   if (this.parentMapFilters.state.shouldHaveFree && location.hasFree) {
  
        return true;
    //   }
  
    //   return false;
    }
  }