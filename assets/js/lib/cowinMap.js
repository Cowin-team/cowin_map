class CowinMap {
  constructor() {
    this.map = null;
    this.initialiseMap();

    this.markerInfoWindow = new google.maps.InfoWindow({ content: "" });
    this.cowinMapMarkers = [];

    this.bounds = new google.maps.LatLngBounds();
    this.filters = [];

    this.hospitalMapFilters = new HospitalMapFilters((newFiltersState) => {
      this.replotAllMarkerClusters()
    });
    this.filters.push(this.hospitalMapFilters);

    this.oxygenMapFilters = new OxygenMapFilters((newFiltersState) => {
      this.replotAllMarkerClusters()
    });
    this.filters.push(this.oxygenMapFilters);

    this.mealsMapFilters = new MealsMapFilters((newFiltersState) => {
      this.replotAllMarkerClusters()
    });
    this.filters.push(this.mealsMapFilters);

    this.triageMapFilters = new TriageMapFilters((newFiltersState) => {
      this.replotAllMarkerClusters()
    });
    this.filters.push(this.triageMapFilters);

    this.oxygenMarkers = [];
    this.covidBedMarkers = [];
    this.mealMarkers = [];
    this.triageMarkers = [];

    this.markerClusters = [];
    this.resetMarkerClusters();
  }

  async initialiseMap() {
    const cachedLat = window.sessionStorage.getItem(CACHED_CITY_LAT);
    const cachedLng = window.sessionStorage.getItem(CACHED_CITY_LNG);
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    if (cachedLat != null && cachedLng != null && city !== null) {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(parseFloat(cachedLat), parseFloat(cachedLng))
      });
    } else {
      // Center on (0, 0). Map center and zoom will reconfigure later (fitbounds method)
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(11.0117016, 76.8971953)
      });
    }
  }

  setupAndPlotCowinMapMarker(cowinMapMarker) {
    google.maps.event.addListener(cowinMapMarker.marker, 'click', () => {
      this.markerInfoWindow.setContent(cowinMapMarker.descriptionHtml);
      this.markerInfoWindow.open(this.map, cowinMapMarker.marker);
    });
    this.cowinMapMarkers.push(cowinMapMarker);
    this.plotCowinMapMarker(cowinMapMarker);
  };

  plotCowinMapMarker(cowinMapMarker) {
    if (this.shouldPlotCowinMapMarker(cowinMapMarker)) {
      if (cowinMapMarker instanceof OxygenSupplyMarker) {
        this.oxygenCluster.addMarker(cowinMapMarker.marker);
      } else if (cowinMapMarker instanceof CovidBedMarker) {
        this.hospitalCluster.addMarker(cowinMapMarker.marker);
      } else if (cowinMapMarker instanceof MealsMarker) {
        this.mealCluster.addMarker(cowinMapMarker.marker);
      } else if (cowinMapMarker instanceof TriageMarker) {
        this.triageCluster.addMarker(cowinMapMarker.marker);
      }
    }
  }

  shouldPlotCowinMapMarker(cowinMapMarker) {
    let shouldPlot = false;
    for (let index in this.filters) {
      if (this.filters[index].shouldShowLocation(cowinMapMarker.location)) {
        shouldPlot = true;
        break;
      }
    }
    return shouldPlot;
  }

  resetMarkerClusters() {
    this.markerClusters.forEach(cluster => cluster.clearMarkers());
    this.markerClusters = [];
    this.oxygenCluster = new MarkerClusterer(
      this.map,
      [],
      { imagePath: `./assets/images/clusters/oxygen/m` }
    );
    this.markerClusters.push(this.oxygenCluster);

    this.hospitalCluster = new MarkerClusterer(
      this.map,
      [],
      { imagePath: `./assets/images/clusters/hospital/m` }
    );
    this.markerClusters.push(this.hospitalCluster);

    this.mealCluster = new MarkerClusterer(
      this.map,
      [],
      { imagePath: `./assets/images/clusters/meal/m` }
    );
    this.markerClusters.push(this.mealCluster);

    this.triageCluster = new MarkerClusterer(
      this.map,
      [],
      { imagePath: `./assets/images/clusters/triage/m` }
    );
    this.markerClusters.push(this.triageCluster);
  }

  replotAllMarkerClusters() {
    this.resetMarkerClusters()
    this.cowinMapMarkers.forEach((cowinMapMarker) => {
      this.plotCowinMapMarker(cowinMapMarker);
    });
  }
}


