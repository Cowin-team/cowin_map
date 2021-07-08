class Bounds {
  constructor(resources, afterFetchCallback) {
    this.afterFetchCallback = afterFetchCallback;

    this.covidBedLocations = [];
    this.covidBedMarkers = [];
    this.hasFetchedCovidBedsData = false;

    this.oxygenSupplyLocations = [];
    this.oxygenSupplyMarkers = [];
    this.hasFetchedOxygenData = false;

    this.mealsLocations = [];
    this.mealsMarkers = [];
    this.hasFetchedMealsData = false;

    this.triageLocations = [];
    this.triageMarkers = [];
    this.hasFetchedTriageData = true;

    //Plot beds
    //This logic will be reused for the each resource type
    //Inspired from the implementation in city.js
    // resources.beds.forEach((dataRow) => {
    //   console.log(dataRow);
    //   let covidBedLocation = new CovidBedLocation(dataRow);
    //   this.covidBedLocations.push(covidBedLocation);
    //   this.covidBedMarkers.push(new CovidBedMarker(covidBedLocation));
    //   this.afterFetchCallback(this.covidBedMarkers);
    // });
    //Plot meals
    console.log(resources.meals);
    resources.meals.forEach((dataRow) => {
      console.log(dataRow);
      let mealsLocation = new MealsLocation(dataRow);
      this.mealsLocations.push(mealsLocation);
      this.mealsMarkers.push(new MealsMarker(mealsLocation));
      this.afterFetchCallback(this.mealsMarkers);
    });
    //Plot OxygenSupply

    //Plot Triage
  }
}
