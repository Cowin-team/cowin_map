const sheetsApiKey = "AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM";

class City {
  constructor(name, resources, afterFetchCallback) {
    this.name               = name;
    this.afterFetchCallback = afterFetchCallback;
    this.resources          = resources;

    this.covidBedLocations  = [];
    this.covidBedMarkers    = [];
    if (resources.includes('beds')) {
      this.fetchCovidBedData();
    }

    this.oxygenSupplyLocations  = [];
    this.oxygenSupplyMarkers    = [];
    if (resources.includes('oxygen')) {
      this.fetchOxygemSupplyData();
    }

    this.mealsLocations  = [];
    this.mealsMarkers    = [];
    if (resources.includes('meals')) {
      this.fetchMealsData();
    }

    // this.triageLocations  = [];
    // this.triageMarkers    = [];
    // if (resources.includes('triage')) {
    //   this.fetchTriageData();
    // }
  }

  fetchCovidBedData() {
    let dataUrl = `https://cowinmapapis.com/sheet/fetch?city=${this.name}&resource=beds`
    
    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach((dataRow) => {
          let covidBedLocation = new CovidBedLocation(dataRow);
          this.covidBedLocations.push(covidBedLocation);

          this.covidBedMarkers.push(new CovidBedMarker(covidBedLocation));
        });

        this.afterFetchCallback(this.covidBedMarkers);
      });
  }

  fetchOxygemSupplyData() {
    let dataUrl = `https://cowinmapapis.com/sheet/fetch?city=${this.name}&resource=oxygen`
    
    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach((dataRow) => {
          let oxygenSupplyLocation = new OxygenSupplyLocation(dataRow);
          this.oxygenSupplyLocations.push(oxygenSupplyLocation);
          this.oxygenSupplyMarkers.push(new OxygenSupplyMarker(oxygenSupplyLocation));
        });

        this.afterFetchCallback(this.oxygenSupplyMarkers);
      });
  }

  fetchMealsData() {
    let dataUrl = `https://cowinmapapis.com/sheet/fetch?city=${this.name}&resource=meals`
    
    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach((dataRow) => {
          let mealsLocation = new MealsLocation(dataRow);
          this.mealsLocations.push(mealsLocation);
          this.mealsMarkers.push(new MealsMarker(mealsLocation));
        });

        this.afterFetchCallback(this.mealsMarkers);
      });
  }

  fetchTriageData() {
    let dataUrl = `https://cowinmapapis.com/sheet/fetch?city=${this.name}&resource=triage`
    
    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach((dataRow) => {
          let triageLocation = new TriageLocation(dataRow);
          this.mealsLocations.push(triageLocation);
          this.triageMarkers.push(new TriageMarker(triageLocation));
        });

        this.afterFetchCallback(this.triageMarkers);
      });
  }
}
