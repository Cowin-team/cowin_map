const sheetsApiKey = "AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM";

class City {
  constructor(name, resources, afterFetchCallback) {
    this.name               = name;
    this.afterFetchCallback = afterFetchCallback;
    this.availableResources = resources;

    this.covidBedLocations  = [];
    this.covidBedMarkers    = [];
    this.hasFetchedCovidBedsData = false;

    if (resources.includes('beds')) {
      this.fetchCovidBedData();
    }

    this.oxygenSupplyLocations  = [];
    this.oxygenSupplyMarkers    = [];
    this.hasFetchedOxygenData = false

    if (resources.includes('oxygen')) {
      this.fetchOxygemSupplyData();
    }

    this.mealsLocations  = [];
    this.mealsMarkers    = [];
    this.hasFetchedMealsData = false;

    if (resources.includes('meals')) {
      this.fetchMealsData();
    }
  }

  fetchedAllData() {
    if ((this.availableResources.includes("beds") && !this.hasFetchedCovidBedsData) ||
      (this.availableResources.includes("oxygen") && !this.hasFetchedOxygenData) ||
      (this.availableResources.includes("meals") && !this.hasFetchedMealsData)) {

      return false;
    }

    return true;
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

        this.hasFetchedCovidBedsData = true;
        this.afterFetchCallback(this.covidBedMarkers);
      })
      .catch(error => {
        console.error(`!!!! Failed to fetch BEDS for ${this.name}: ${error}`);
        this.hasFetchedCovidBedsData = true;
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

        this.hasFetchedOxygenData = true;
        this.afterFetchCallback(this.oxygenSupplyMarkers);
      })
      .catch(error => {
        console.error(`!!!! Failed to fetch OXYGEN SUPPLY for ${this.name}: ${error}`);
        this.hasFetchedOxygenData = true;
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

        this.hasFetchedMealsData = true;
        this.afterFetchCallback(this.mealsMarkers);
      })
      .catch(error => {
        console.error(`!!!! Failed to fetch MEALS for ${this.name}: ${error}`);
        this.hasFetchedMealsData = true;
      });
  }
}

