import MapFilters from './mapFilters';

class CowinMap {
  constructor() {
    this.map = null;
    this.initialiseMap();
    this.markerInfoWindow = new google.maps.InfoWindow({ content: "" });
    this.cowinMapMarkers = [];
    this.bounds = new google.maps.LatLngBounds();
    this.mapFilters = new MapFilters((newFiltersState) => {
      this.plotAllCowinMapMarkers();
    });
  }

  initialiseMap() {
    // Center on (0, 0). Map center and zoom will reconfigure later (fitbounds method)
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(0, 0)
    });
  }

  setupAndPlotCowinMapMarker(cowinMapMarker) {
    google.maps.event.addListener(cowinMapMarker.marker, 'click', () => {
      this.markerInfoWindow.setContent(cowinMapMarker.descriptionHtml);
      this.markerInfoWindow.open(this.map, cowinMapMarker.marker);
    });
    this.cowinMapMarkers.push(cowinMapMarker);
  };

  plotCowinMapMarker(cowinMapMarker) {
    let shouldRenderMarker = true;

    let filters = this.mapFilters.getCurrentSelection();
    if ((filters.shouldHaveCovidBeds && !cowinMapMarker.location.hasCovidBeds) ||
      (filters.shouldHaveOxygenBeds && !cowinMapMarker.location.hasOxygenBeds) ||
      (filters.shouldHaveICUs && !cowinMapMarker.location.hasICUs) ||
      (filters.shouldHaveVentilators && !cowinMapMarker.location.hasVentilators)) {

      shouldRenderMarker = false;
    }

    if (shouldRenderMarker) {
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

    this.map.fitBounds(this.bounds);
  }
}

export default CowinMap;
