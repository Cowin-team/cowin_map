class CovidBedMarker {
  constructor(location) {
    this.location = location;
    this.marker = new google.maps.Marker({
      position: location.position,
      map: null,
      title: location.title
    });
    this.position = this.marker.position;

    this.descriptionHtml = `
      <div class="content">
        <h5 class="title is-5 mb-0">
         ${(location.url === undefined) ? location.title : ('<a href="' + location.url +'">' + location.title + '</a>')}
        </h5>
        <p class="is-size-7 mt-1">Updated at: ${location.updatedAt}</p>
        <table class="table has-text-left is-striped is-narrow is-hoverable">
          <tr><th>COVID Beds: </th><td>${location.covidbed}</td></tr>
          <tr><th>Oxygen Beds: </th><td>${location.oxybed}</td></tr>
          <tr><th>ICUs: </th><td>${location.icu}</td></tr>
          <tr><th>Ventilators: </th><td>${location.venti}</td></tr>
        </table>
      </div>
    `
  }

  setMap(map) {
    this.marker.setMap(map);
  }
}

export default CovidBedMarker;
