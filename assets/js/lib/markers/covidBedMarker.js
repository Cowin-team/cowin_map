class CovidBedMarker {
  constructor(location) {
    this.location = location;


    this.marker = new google.maps.Marker({
      position: location.position,
      map: null,
      title: location.title,
      icon: "assets/images/hospital_marker.png"
    });

    this.position = this.marker.position;

    var contact_info = []

    for(var idx =0; idx< location.contacts.length; idx++) {
      contact_info.push('<a href="tel:' + location.contacts[idx] +'">' + location.contacts[idx] + '</a>')
    }

    var contact_details = contact_info.join('<br/>')

    this.descriptionHtml = `
      <div class="content">
        <h5 class="title is-5 mb-0">
         ${(location.url === undefined) ? location.title : ('<a href="' + location.url +'" target="_blank">' + location.title + '</a>')}
        </h5>
        <p class="is-size-7 mt-1">Updated at: ${location.updatedAt}</p>
        <p class="is-size-7 mt-1">${(location.sourceURL === undefined) ? "": ('<a href="' + location.sourceURL +'" target="_blank">' + 'Source' + '</a>')}</p>

        <p class="is-size-7 mt-1">Contact: ${(location.contacts.length === 0) ? "N/A" : (contact_details)}</p>
        <table class="table has-text-left is-striped is-narrow is-hoverable">
          <tr><th>COVID Beds: </th><td>${location.covidbed}</td></tr>
          <tr><th>Oxygen Beds: </th><td>${location.oxybed}</td></tr>
          <tr><th>ICUs: </th><td>${location.icu}</td></tr>
          <tr><th>HDU Beds: </th><td>${location.hdubed}</td></tr>
          <tr><th>Ventilators: </th><td>${location.venti}</td></tr>
        </table>
      </div>
    `
  }

  getMarker() {
    return this.marker;
  }
}
