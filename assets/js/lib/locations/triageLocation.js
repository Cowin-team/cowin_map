class TriageLocation {
  constructor(dataRow) {
    this.type = "TriageLocation";
    this.title = dataRow[0];
    this.latitude = parseFloat(dataRow[2]);
    this.longitude = parseFloat(dataRow[3]);
    this.url = dataRow[4];
    if ((isNaN(this.latitude) || isNaN(this.longitude)) && Boolean(this.url)) {
      try {
        var url_location = this.url.split('@')[1].split('z')[0].split(',');
        this.latitude = parseFloat(url_location[0]);
        this.longitude = parseFloat(url_location[1]);

      } catch (e) {
        console.log(`Error in parsing URL for ${this.type} for title: ${this.title}`);
        console.log(e);
      }
    }
    this.nodal_officer = dataRow[6];

    this.nodal_officer_contact = [];

    if (dataRow[7] !== undefined) {
      var contacts_info = dataRow[7].split(',')

      for (var idx = 0; idx < contacts_info.length; idx++) {
        this.nodal_officer_contact.push(contacts_info[idx].trim())
      }
    }

    this.helpline_contact = [];

    if (dataRow[8] !== undefined) {
      var contacts_info = dataRow[8].split(',')

      for (var idx = 0; idx < contacts_info.length; idx++) {
        this.helpline_contact.push(contacts_info[idx].trim())
      }
    }

    this.position = { lat: this.latitude, lng: this.longitude };
    this.isTriageCenter = true;
  }
}
