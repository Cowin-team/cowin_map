class PharmaLocation {
    constructor(dataRow) {
      this.type            = "PharmaLocation";
      this.title           = dataRow[0];
      this.latitude        = parseFloat(dataRow[2]);
      this.longitude       = parseFloat(dataRow[3]);
      this.url             = dataRow[4];
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
      
      if (dataRow[6] !==undefined){
        this.isGovt = this.parseYesOrNo(dataRow[6]);
        this.isPrivate = !this.isGovt
      }

      this.additionalInfo  = dataRow[7]
      this.updatedAt       = dataRow[9];
      this.contacts       = [];
  
      if(dataRow[5]!== undefined) {
        var contacts_info = dataRow[11].split(',')
  
        for(var idx =0; idx< contacts_info.length; idx++) {
          this.contacts.push(contacts_info[idx].trim())
        }
      }
  
      this.position        = { lat: this.latitude, lng: this.longitude };
    }
  
    parseYesOrNo(value) {
      if (value === undefined) {
        return undefined;
      }
  
      value = value.toLowerCase().trim();
      if (value == "Govt") {
        return true;
      } else if (value == "private") {
        return false
      }
  
      return undefined;
    }
  }
  