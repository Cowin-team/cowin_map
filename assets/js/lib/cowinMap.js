class CowinMap {
  constructor() {
    this.map = null;
    this.initialiseMap();

    this.markerInfoWindow = new google.maps.InfoWindow({ content: "" });
    this.cowinMapMarkers = [];

    this.markerClusters = [];
    this.bounds = new google.maps.LatLngBounds();
    this.filters = [];

    this.hospitalMapFilters = new HospitalMapFilters((newFiltersState) => {
      this.plotAllCowinMapMarkers()
    });
    this.filters.push(this.hospitalMapFilters);

    this.oxygenMapFilters = new OxygenMapFilters((newFiltersState) => {
      this.plotAllCowinMapMarkers()
    });
    this.filters.push(this.oxygenMapFilters);

    this.mealsMapFilters = new MealsMapFilters((newFiltersState) => {
      this.plotAllCowinMapMarkers()
    });
    this.filters.push(this.mealsMapFilters);

    // this.triageMapFilters = new TriageMapFilters((newFiltersState) => {
    //   this.plotAllCowinMapMarkers()
    // });
    // this.filters.push(this.triageMapFilters);
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
  };

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

  clearClustersMarkers() {
    this.markerClusters.forEach(cluster => cluster.clearMarkers());
  }

  plotAllCowinMapMarkers() {
    this.clearClustersMarkers()
    let filteredMarkers = this.cowinMapMarkers.filter((marker) => {
      return this.shouldPlotCowinMapMarker(marker)
    })

    let oxygenMarkers = filteredMarkers.filter((marker) => {
      return marker instanceof OxygenSupplyMarker
    }).map((m) => m.getMarker())

    let bedMarkers = filteredMarkers.filter((marker) => {
      return marker instanceof CovidBedMarker
    }).map((m) => m.getMarker())

    let mealMarkers = filteredMarkers.filter((marker) => {
      return marker instanceof MealsMarker
    }).map((m) => m.getMarker())

    // let triageMarkers = filteredMarkers.filter((marker) => {
    //   return marker instanceof TriageMarker
    // }).map((m) => m.getMarker())

    let oxygenCluster = new MarkerClusterer(this.map, oxygenMarkers, { imagePath: `./assets/images/clusters/oxygen/m` });
    this.markerClusters.push(oxygenCluster);
    let hospitalCluster = new MarkerClusterer(this.map, bedMarkers, { imagePath: `./assets/images/clusters/hospital/m` });
    this.markerClusters.push(hospitalCluster);
    let mealCluster = new MarkerClusterer(this.map, mealMarkers, { imagePath: `./assets/images/clusters/meal/m` });
    this.markerClusters.push(mealCluster);
    // let triageCluster = new MarkerClusterer(this.map, triageMarkers, { imagePath: `./assets/images/clusters/triage/m` });
    // this.markerClusters.push(triageCluster);
  }
}