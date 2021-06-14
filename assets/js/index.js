function initialiseMap() {
  let c = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      c.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
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
