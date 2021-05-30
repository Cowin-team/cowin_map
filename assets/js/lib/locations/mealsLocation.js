class MealsLocation {
    constructor(dataRow) {
      this.type      = "MealsLocation";
      this.title     = dataRow[0];
      this.latitude  = parseFloat(dataRow[2]);
      this.longitude = parseFloat(dataRow[3]);
  
      this.contacts = [];
  
      if(dataRow[4]!== undefined) {
        var contacts_info = dataRow[4].split(',')
  
        for(var idx =0; idx< contacts_info.length; idx++) {
          this.contacts.push(contacts_info[idx].trim())
        }
      } 
      
      this.type = dataRow[5];
      if (dataRow[6] !==undefined){
        this.hasFree = this.parseYesOrNo(dataRow[6]);
        this.hasPaid = !this.hasFree
      }
      
      this.additionalInfo = dataRow[7];

      this.position       = { lat: this.latitude, lng: this.longitude };
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