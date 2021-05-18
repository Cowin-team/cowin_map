const sheetsApiKey = "AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM";

class City {
  constructor(name, spreadsheetIds, afterFetchCallback) {
    this.name               = name;
    this.spreadsheetIds     = spreadsheetIds;
    this.afterFetchCallback = afterFetchCallback;

    this.covidBedLocations  = [];
    this.covidBedMarkers    = [];
    this.fetchCovidBedData();

    this.oxygenSupplyLocations  = [];
    this.oxygenSupplyMarkers    = [];
    if (spreadsheetIds.oxygenSupply !== undefined) {
      this.fetchOxygemSupplyData();
    }

    this.mealsLocations  = [];
    this.mealsMarkers    = [];
    if (spreadsheetIds.meals !== undefined) {
      this.fetchMealsData();
    }

    this.triageLocations  = [];
    this.triageMarkers    = [];
    if (spreadsheetIds.triage !== undefined) {
      this.fetchTriageData();
    }
  }

  fetchCovidBedData() {
    let sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/"+
      `${this.spreadsheetIds.covidBeds}/values/Sheet1!A2:Q?key=${sheetsApiKey}`

    fetch(sheetUrl)
      .then(response => response.json())
      .then(data => {
        data.values.forEach((dataRow) => {
          let covidBedLocation = new CovidBedLocation(dataRow);
          this.covidBedLocations.push(covidBedLocation);

          this.covidBedMarkers.push(new CovidBedMarker(covidBedLocation, this.spreadsheetIds.covidBeds));
        });

        this.afterFetchCallback(this.covidBedMarkers);
      });
  }

  fetchOxygemSupplyData() {
    let sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/"+
      `${this.spreadsheetIds.oxygenSupply}/values/Sheet1!A2:Q?key=${sheetsApiKey}`

    fetch(sheetUrl)
      .then(response => response.json())
      .then(data => {
        data.values.forEach((dataRow) => {
          let oxygenSupplyLocation = new OxygenSupplyLocation(dataRow);
          this.oxygenSupplyLocations.push(oxygenSupplyLocation);
          this.oxygenSupplyMarkers.push(new OxygenSupplyMarker(oxygenSupplyLocation, this.spreadsheetIds.oxygenSupply));
        });

        this.afterFetchCallback(this.oxygenSupplyMarkers);
      });
  }

  fetchMealsData() {
    let sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/"+
      `${this.spreadsheetIds.meals}/values/Sheet1!A2:Q?key=${sheetsApiKey}`

    fetch(sheetUrl)
      .then(response => response.json())
      .then(data => {
        data.values.forEach((dataRow) => {
          let mealsLocation = new MealsLocation(dataRow);
          this.mealsLocations.push(mealsLocation);
          this.mealsMarkers.push(new MealsMarker(mealsLocation, this.spreadsheetIds.mealsSupply));
        });

        this.afterFetchCallback(this.mealsMarkers);
      });
  }

  fetchTriageData() {
    let sheetUrl = "https://sheets.googleapis.com/v4/spreadsheets/"+
      `${this.spreadsheetIds.triage}/values/Sheet1!A2:Q?key=${sheetsApiKey}`

    fetch(sheetUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.values.forEach((dataRow) => {
          let triageLocation = new TriageLocation(dataRow);
          this.mealsLocations.push(triageLocation);
          this.triageMarkers.push(new TriageMarker(triageLocation, this.spreadsheetIds.triage));
        });

        this.afterFetchCallback(this.triageMarkers);
      });
  }
}

