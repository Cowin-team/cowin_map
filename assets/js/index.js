function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
    cowinMap.plotAllCowinMapMarkers();
  };

  citiesWithResources.forEach((cityWithResource)=> {
    new City(
      cityWithResource.city,
      cityWithResource.resources,
      afterCityDataFetchCallback
    );
  })
}

window.initialiseMap = initialiseMap;
