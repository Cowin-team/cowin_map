class OxygenSupplyLocation {
  constructor(dataRow) {
    this.type            = "OxygenSupplyLocation";
    this.title           = dataRow[0];
    this.latitude        = parseFloat(dataRow[2]);
    this.longitude       = parseFloat(dataRow[3]);
    this.url             = dataRow[4];
    this.hasRefilling    = this.parseYesOrNo(dataRow[5]);
    this.hasCylinders    = this.parseYesOrNo(dataRow[6]);
    this.hasCans         = this.parseYesOrNo(dataRow[7]);
    this.hasConcentrator = this.parseYesOrNo(dataRow[8]);
    this.additionalInfo  = dataRow[9]
    this.updatedAt       = dataRow[10];
    this.contact       = dataRow[11];

    this.position        = { lat: this.latitude, lng: this.longitude };
  }

  parseYesOrNo(value) {
    value = value.toLowerCase().trim();
    if (value == "yes") {
      return true;
    } else if (value == "no") {
      return false
    }

    return undefined;
  }
}
