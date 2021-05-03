class MapFilters {
  constructor(options) {
    this.state = []
    options.filterNames.forEach((filterName) => {
      this.state[filterName] = true
    })
    this.setEventListeners(options.filtersElemSelector);
    this.onChangeCallback = options.onChangeCallback;
  }

  setEventListeners(filtersElemSelector) {
    let that = this;
    document.querySelectorAll(filtersElemSelector).forEach(function(filter_chkbx) {
      filter_chkbx.addEventListener("change", (event) => {
        that.filterChanged(event.target)
      });
    });
  }

  anyApplied() {
    let isAnyApplied = false;

    for (const filterName in this.state) {
      if (this.state[filterName] == true) {
        isAnyApplied = true;
        break;
      }
    }
    return isAnyApplied;
  }

  filterChanged(checkedCheckboxElem) {
    let filterName = checkedCheckboxElem.dataset.filterName;
    this.state[filterName] = checkedCheckboxElem.checked;

    this.onChangeCallback(this.state);
  }
}

export default MapFilters;
