class OxygenSupplyLocation {
  constructor(dataRow) {
    this.type            = "OxygenSupplyLocation";
    this.title           = dataRow[0];
    this.latitude        = parseFloat(dataRow[2]);
    this.longitude       = parseFloat(dataRow[3]);
    this.url             = dataRow[4];
    if ((isNaN(this.latitude) || isNaN(this.longitude)) && Boolean(this.url)) {
      var url_location = this.url.split('@')[1].split('z')[0].split(',');
      this.latitude = parseFloat(url_location[0]);
      this.longitude = parseFloat(url_location[1]);
    }
    this.hasRefilling    = this.parseYesOrNo(dataRow[5]);
    this.hasCylinders    = this.parseYesOrNo(dataRow[6]);
    this.hasCans         = this.parseYesOrNo(dataRow[7]);
    this.hasConcentrator = this.parseYesOrNo(dataRow[8]);
    this.additionalInfo  = dataRow[9]
    this.updatedAt       = dataRow[10];
    this.contacts       = [];

    if(dataRow[11]!== undefined) {
      var contacts_info = dataRow[11].split(',')

      for(var idx =0; idx< contacts_info.length; idx++) {
        this.contacts.push(contacts_info[idx].trim())
      }
    } 

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
