const sheetsApiKey = "AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM";
import CovidBedLocation from './locations/covidBedLocation';
import CovidBedMarker from './markers/covidBedMarker';

class City {
  constructor(name, spreadsheetIds, afterFetchCallback) {
    this.name               = name;
    this.spreadsheetIds     = spreadsheetIds;
    this.covidBedLocations  = [];
    this.covidBedMarkers    = [];
    this.afterFetchCallback = afterFetchCallback;

    this.fetchCovidBedData();
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
}

export default City;
