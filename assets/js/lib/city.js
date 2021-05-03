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
          this.covidBedMarkers.push(new CovidBedMarker(covidBedLocation));
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
          this.oxygenSupplyMarkers.push(new OxygenSupplyMarker(oxygenSupplyLocation));
        });

        this.afterFetchCallback(this.oxygenSupplyMarkers);
      });
  }
}

