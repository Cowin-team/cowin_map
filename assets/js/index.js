function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
    cowinMap.plotAllCowinMapMarkers();
  };

  let resourceUrl = "https://cowinmapapis.com/resource/get";
  let cities = [];

  fetch(resourceUrl)
    .then(response => response.json())
    .then(data => {
      for (let city in data) {
        cities.push(new City(city, data[city], afterCityDataFetchCallback));
      }
    });
}

window.initialiseMap = initialiseMap;
