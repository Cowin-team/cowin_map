class OxygenSupplyMarker {
  constructor(location, sheet_id) {
    this.location = location;
    this.marker = new google.maps.Marker({
      position: location.position,
      map: null,
      title: location.title,
      icon: "/assets/images/oxygen.png"
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
        <p class="is-size-7 mt-1">Updated at: ${location.updatedAt} (<a target="_blank" href="${this.sheet_url}">Source</a>)</p>
        <p class="is-size-7 mt-1">Contact: ${(location.contacts.length === 0) ? "N/A" : (contact_details)}</p>
        <table class="table has-text-left is-striped is-narrow is-hoverable">
          <tr><th>Oxygen Refilling</th><td>${location.hasRefilling ? "Yes" : "No" }</td></tr>
          <tr><th>Oxygen Cylinders</th><td>${location.hasCylinders ? "Yes" : "No" }</td></tr>
          <tr><th>Oxygen Cans</th><td>${location.hasCans ? "Yes" : "No" }</td></tr>
          <tr><th>Oxygen Concentrator</th><td>${location.hasConcentrator ? "Yes" : "No" }</td></tr>
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

  getMarker(map) {
    google.maps.event.addListener(this.marker, 'click', function(evt) {
      infoWin.setContent(this.descriptionHtml);
      infoWin.open(map, this.marker);
    })

    return this.marker;
  }

  setMap(map) {
    this.marker.setMap(map);
  }
}
