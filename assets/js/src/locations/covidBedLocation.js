class CovidBedLocation {
  constructor(dataRow) {
    this.title     = dataRow[0];
    this.url       = dataRow[4];
    this.latitude  = parseFloat(dataRow[2]);
    this.longitude = parseFloat(dataRow[3]);
    
    if (isNaN(this.latitude) && isNaN(this.longitude)  && Boolean(this.url)){
      var url_location = this.url.split('@')[1].split('z')[0].split(',');
      this.latitude = parseFloat(url_location[0]);
      this.longitude = parseFloat(url_location[1]);
    }
    this.covidbed  = (dataRow[5] === undefined ? "N/A" : dataRow[5]);
    this.oxybed    = (dataRow[6] === undefined ? "N/A" : dataRow[6]);
    this.icu       = (dataRow[7] === undefined ? "N/A" : dataRow[7]);
    this.venti     = (dataRow[8] === undefined ? "N/A" : dataRow[8]);
    this.updatedAt = dataRow[9];

    this.position       = { lat: this.latitude, lng: this.longitude };
    this.hasCovidBeds   = this.hasAttribute("covidbed");
    this.hasOxygenBeds  = this.hasAttribute("oxybed");
    this.hasICUs        = this.hasAttribute("icu");
    this.hasVentilators = this.hasAttribute("venti");
  }

  hasAttribute(attr) {
    if (this[attr] === undefined || this[attr] === "") {
      return false;
    }
    if (isNaN(this[attr])) { return false; }
    if (parseFloat(this[attr]) < 1) { return false; }

    return true;
  }
}

export default CovidBedLocation;
