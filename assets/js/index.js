if (location.protocol === "https:") {
  location.protocol = "http:";
}

function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
  };

  let resourceUrl = "http://34.93.236.45/resource/get";
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
