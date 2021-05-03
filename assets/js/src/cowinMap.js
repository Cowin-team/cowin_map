import HospitalMapFilters from './filters/hospitalMapFilters';

class CowinMap {
  constructor() {
    this.map              = null;
    this.initialiseMap();

    this.markerInfoWindow = new google.maps.InfoWindow({ content: "" });
    this.cowinMapMarkers  = [];
    this.bounds           = new google.maps.LatLngBounds();
    this.filters       = [];

    this.hospitalMapFilters = new HospitalMapFilters((newFiltersState) => {
      this.plotAllCowinMapMarkers();
    });
    this.filters.push(this.hospitalMapFilters);
  }

  initialiseMap() {
    // Center on (0, 0). Map center and zoom will reconfigure later (fitbounds method)
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(11.0117016,76.8971953)
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.map.setCenter(pos);
        },
        () => {
          // Center on Coimbatore
          this.map.setCenter(new google.maps.LatLng(11.0117016,76.8971953));
        }
      );
    } else {
      // Browser doesn't support Geolocation
      // Center on Coimbatore
      this.map.setCenter(new google.maps.LatLng(11.0117016,76.8971953));
    }
  }

  setupAndPlotCowinMapMarker(cowinMapMarker) {
    google.maps.event.addListener(cowinMapMarker.marker, 'click', () => {
      this.markerInfoWindow.setContent(cowinMapMarker.descriptionHtml);
      this.markerInfoWindow.open(this.map, cowinMapMarker.marker);
    });
    this.cowinMapMarkers.push(cowinMapMarker);
  };

  plotCowinMapMarker(cowinMapMarker) {
    let shouldPlot = true;

    for (let index in this.filters) {
      if (this.filters[index].shouldHideLocation(cowinMapMarker.location)) {
        shouldPlot = false;
        break;
      }
    }

    if (shouldPlot) {
      cowinMapMarker.setMap(this.map);
      if (!isNaN(cowinMapMarker.location.latitude) && !isNaN(cowinMapMarker.location.longitude)) {
        this.bounds.extend(cowinMapMarker.position);
      }
    } else {
      cowinMapMarker.setMap(null);
    }
  }

  plotAllCowinMapMarkers() {
    this.cowinMapMarkers.forEach((cowinMapMarker) => {
      this.plotCowinMapMarker(cowinMapMarker);
    });

    // this.map.fitBounds(this.bounds);
  }
}
export default CowinMap;
