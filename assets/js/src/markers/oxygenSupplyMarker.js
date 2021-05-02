class OxygenSupplyMarker {
  constructor(location) {
    this.location = location;
    this.marker = new google.maps.Marker({
      position: location.position,
      map: null,
      title: location.title,
      icon: "/assets/images/oxygen-tank-2.png"
    });
    this.position = this.marker.position;

    this.descriptionHtml = `
      <div class="content">
        <h5 class="title is-5 mb-0">
         ${(location.url === undefined) ? location.title : ('<a href="' + location.url +'">' + location.title + '</a>')}
        </h5>
        <p class="is-size-7 mt-1">Updated at: ${location.updatedAt}</p>
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

  setMap(map) {
    this.marker.setMap(map);
  }
}

export default OxygenSupplyMarker;
