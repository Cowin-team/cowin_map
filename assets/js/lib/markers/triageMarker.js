class TriageMarker {
  constructor(location, sheet_id) {
    this.location = location;
    this.marker = new google.maps.Marker({
      position: location.position,
      map: null,
      title: location.title,
      icon: "assets/images/triage.png"
    });
    this.position = this.marker.position;

    var nodal_contact_info = []

    for (var idx = 0; idx < location.nodal_officer_contact.length; idx++) {
      nodal_contact_info.push('<a href="tel:' + location.nodal_officer_contact[idx] + '">' + location.nodal_officer_contact[idx] + '</a>')
    }

    var nodal_contact_details = nodal_contact_info.join('<br/>')

    var helpline_contact_info = []

    for (var idx = 0; idx < location.helpline_contact.length; idx++) {
      helpline_contact_info.push('<a href="tel:' + location.helpline_contact[idx] + '">' + location.helpline_contact[idx] + '</a>')
    }

    var helpline_contact_details = helpline_contact_info.join('<br/>')

    this.sheet_url = "https://docs.google.com/spreadsheets/d/" + sheet_id

    this.descriptionHtml = `
        <div class="content">
          <h5 class="title is-5 mb-0">
           ${(location.url === undefined) ? location.title : ('<a href="' + location.url + '">' + location.title + '</a>')}
          </h5>
          <p>
          <p class="is-size-7 mt-1">Nodal officer: ${location.nodal_officer}</p>
          <p class="is-size-7 mt-1">Nodal officer Contact: ${(location.nodal_officer_contact.length === 0) ? "N/A" : (nodal_contact_details)}</p>
          <p class="is-size-7 mt-1">Helpline contact: ${(location.helpline_contact.length === 0) ? "N/A" : (helpline_contact_details)}</p>
          </p>
        </div>
      `
  }

  getMarker() {
    return this.marker;
  }
}

