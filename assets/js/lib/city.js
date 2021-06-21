const sheetsApiKey = "AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM";

class City {
  constructor(name, resources, afterFetchCallback) {
    this.name               = name;
    this.afterFetchCallback = afterFetchCallback;
    this.availableResources          = resources;

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

    this.triageLocations  = [];
    this.triageMarkers    = [];
    this.hasFetchedTriageData = true;

    if (resources.includes('triage')) {
      this.fetchTriageData();
    }

    this.pharmaLocations  = [];
    this.pharmaMarkers    = [];
    this.hasFetchedPharmaData = false;

    if (resources.includes('pharma')) {
      this.fetchPharmaData();
    }
  }

  fetchedAllData() {
     if ((this.availableResources.includes("beds") && !this.hasFetchedCovidBedsData) ||
       (this.availableResources.includes("oxygen") && !this.hasFetchedOxygenData) ||
       (this.availableResources.includes("meals") && !this.hasFetchedMealsData) ||
       (this.availableResources.includes("triage") && !this.hasFetchedTriageData) ||
       (this.availableResources.includes("pharma") && !this.hasFetchedPharmaData)) {

       return false;
     }

     return true;
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

        this.hasFetchedCovidBedsData = true;
        this.afterFetchCallback(this.covidBedMarkers);
      })
      .catch(error => {
         console.error(`!!!! Failed to fetch BEDS for ${this.name}: ${error}`);
         this.hasFetchedCovidBedsData = true;
       });;
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

        this.hasFetchedOxygenData = true;
        this.afterFetchCallback(this.oxygenSupplyMarkers);
      })
      .catch(error => {
         console.error(`!!!! Failed to fetch OXYGEN SUPPLY for ${this.name}: ${error}`);
         this.hasFetchedOxygenData = true;
       });;
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

        this.hasFetchedMealsData = true;
        this.afterFetchCallback(this.mealsMarkers);
      })
      .catch(error => {
         console.error(`!!!! Failed to fetch MEALS for ${this.name}: ${error}`);
         this.hasFetchedMealsData = true;
       });;
  }

  fetchTriageData() {
    let dataUrl = `https://cowinmapapis.com/sheet/fetch?city=${this.name}&resource=triage`

    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach((dataRow) => {
          let triageLocation = new TriageLocation(dataRow);
          this.triageLocations.push(triageLocation);
          this.triageMarkers.push(new TriageMarker(triageLocation));
        });

        this.hasFetchedTriageData = true;
        this.afterFetchCallback(this.triageMarkers);
      })
      .catch(error => {
         console.error(`!!!! Failed to fetch TRIAGE for ${this.name}: ${error}`);
         this.hasFetchedTriageData = true;
       });;
  }

  fetchPharmaData() {
    let dataUrl = `https://cowinmapapis.com/sheet/fetch?city=${this.name}&resource=pharma`

    fetch(dataUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach((dataRow) => {
          let pharmaLocation = new PharmaLocation(dataRow);
          this.pharmaLocations.push(pharmaLocation);
          this.pharmaMarkers.push(new PharmaMarker(pharmaLocation));
        });

        this.hasFetchedPharmaData = true;
        this.afterFetchCallback(this.pharmaMarkers);
      })
      .catch(error => {
         console.error(`!!!! Failed to fetch Pharma for ${this.name}: ${error}`);
         this.hasFetchedPharmaData = true;
       });;
  }
}
