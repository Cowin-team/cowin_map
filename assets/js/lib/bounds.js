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

    // for (const [key, value] of Object.entries(resources)) {
    //   if (key == "beds") {
    //     value.forEach((dataRow) => {
    //       console.log("Inside beds forloop");
    //       let covidBedLocation = new CovidBedLocation(dataRow);
    //       this.covidBedLocations.push(covidBedLocation);
    //       this.covidBedMarkers.push(new CovidBedMarker(covidBedLocation));
    //       this.afterFetchCallback(this.covidBedMarkers);
    //     });
    //   } else if (key == "meals") {
    //     console.log("Inside meals loop");

    //   }
    // }
    resources.beds.forEach((dataRow) => {
      console.log(dataRow);
      let covidBedLocation = new CovidBedLocation(dataRow);
      this.covidBedLocations.push(covidBedLocation);
      this.covidBedMarkers.push(new CovidBedMarker(covidBedLocation));
      this.afterFetchCallback(this.covidBedMarkers);
    });
    resources.meals.forEach((dataRow) => {
      let mealsLocation = new MealsLocation(dataRow);
      this.mealsLocations.push(mealsLocation);
      this.mealsMarkers.push(new MealsMarker(mealsLocation));
      this.afterFetchCallback(this.mealsMarkers);
    });
  }
}
