class MealsMarker {
    constructor(location, sheet_id) {
      this.location = location;
      this.marker = new google.maps.Marker({
        position: location.position,
        map: null,
        title: location.title,
        icon: "/assets/images/meal_marker.png"
      });
      this.position = this.marker.position;
  
      this.sheet_url = "https://docs.google.com/spreadsheets/d/" + sheet_id
  
      var contact_info = []
  
      for(var idx =0; idx< location.contacts.length; idx++) {
        contact_info.push('<a href="tel:' + location.contacts[idx] +'">' + location.contacts[idx] + '</a>')
      }
  
      var contact_details = contact_info.join('<br/>')
  
      this.descriptionHtml = `
        <div class="content">
          <h5 class="title is-5 mb-0">
           ${(location.url === undefined) ? location.title : ('<a href="' + location.url +'">' + location.title + '</a>')}
          </h5>
          <p class="is-size-7 mt-1">Contact: ${(location.contacts.length === 0) ? "N/A" : (contact_details)}</p>
          <table class="table has-text-left is-striped is-narrow is-hoverable">
            <tr><th>Free</th><td>${location.hasFree ? "Yes" : "No" }</td></tr>
            <tr><th>Type</th><td>${location.type}</td></tr>
          </table>
          <p>
          <strong>
            Additional info:
          </strong>
          ${location.additionalInfo}
          </p>
        </div>
      `
    }
  
    setMap(map) {
      this.marker.setMap(map);
    }
  }
  