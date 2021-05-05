class CovidBedLocation {
  constructor(dataRow) {
    this.type      = "CovidBedLocation";
    this.title     = dataRow[0];
    this.latitude  = parseFloat(dataRow[2]);
    this.longitude = parseFloat(dataRow[3]);
    this.url       = dataRow[4];
    this.covidbed  = (dataRow[5] === undefined ? "N/A" : dataRow[5]);
    this.oxybed    = (dataRow[6] === undefined ? "N/A" : dataRow[6]);
    this.icu       = (dataRow[7] === undefined ? "N/A" : dataRow[7]);
    this.venti     = (dataRow[8] === undefined ? "N/A" : dataRow[8]);
    this.updatedAt = dataRow[9];

    this.contact = dataRow[10];

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
