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

    // this.triageMapFilters = new TriageMapFilters((newFiltersState) => {
    //   this.replotAllMarkerClusters()
    // });
    // this.filters.push(this.triageMapFilters);

    this.oxygenMarkers = [];
    this.covidBedMarkers = [];
    this.mealMarkers = [];
    // this.triageMarkers = [];
    
    this.markerClusters = [];
    this.resetMarkerClusters();
  }

  initialiseMap() {
    // Center on (0, 0). Map center and zoom will reconfigure later (fitbounds method)
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(11.0117016, 76.8971953)
    });

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    if (city !== null) {
      this.setMapAddress(city)
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.map.setCenter(pos);
        },
        () => {
          // could not fetch location
          this.setDefaultMapLocation()
        }
      );
    } else {
      // Browser doesn't support Geolocation
      // No city found in url param
      // Center on Coimbatore
      this.setDefaultMapLocation()
    }
  }

  setDefaultMapLocation() {
    this.map.setCenter(new google.maps.LatLng(11.0117016, 76.8971953));
  }

  setMapAddress(city) {
    citiesWithResources.forEach((element) => {
      if(element.city.toLowerCase() == city.toLowerCase()) {
        this.map.setCenter(new google.maps.LatLng(element.lat, element.lng));
      }
    })
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
     if (cowinMapMarker instanceof OxygenSupplyMarker) {
       this.oxygenCluster.addMarker(cowinMapMarker.marker);
     } else if (cowinMapMarker instanceof CovidBedMarker) {
       this.hospitalCluster.addMarker(cowinMapMarker.marker);
     } else if (cowinMapMarker instanceof MealsMarker) {
       this.mealCluster.addMarker(cowinMapMarker.marker);
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
  }

  replotAllMarkerClusters() {
    this.resetMarkerClusters()
    let filteredMarkers = this.cowinMapMarkers.filter((cowinMapMarker) => {
      if (this.shouldPlotCowinMapMarker(cowinMapMarker)) {
        this.plotCowinMapMarker(cowinMapMarker);
      }
    });
  }
}