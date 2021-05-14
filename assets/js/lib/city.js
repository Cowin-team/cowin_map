const sheetsApiKey = "AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM";

class City {
  constructor(name, resources, afterFetchCallback) {
    this.name               = name;
    this.afterFetchCallback = afterFetchCallback;

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
  }

  fetchCovidBedData() {
    let dataUrl = `http://35.223.206.45/sheet/fetch?city=${this.name}&resource=beds`

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
    let dataUrl = `http://35.223.206.45/sheet/fetch?city=${this.name}&resource=oxygen`

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
    let dataUrl = `http://35.223.206.45/sheet/fetch?city=${this.name}&resource=meals`

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
}

