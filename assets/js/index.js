function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
  };

  let resourceUrl = "https://cowinmapapis.com/resource/get";
  let cities = [];

  //fetchByBounds to be implemented here
  //Lets start by getting the level of zoom
  //console.log(cowinMap.map.getZoom());


  function getResourcesByBound(map) {
    var bounds = map.getBounds();
    var NECorner = bounds.getNorthEast();
    var SWCorner = bounds.getSouthWest();
    var NWCorner = new google.maps.LatLng(NECorner.lat(), SWCorner.lng());
    var SECorner = new google.maps.LatLng(SWCorner.lat(), NECorner.lng());
    console.log(map);
    //Zoom level 11 seems good
    console.log("Zoom level of this map is: ", map.getZoom());
    if (map.getZoom() >= 11) {
      const params = {
        pt1: NECorner.lng()
          .toString()
          .concat("," + NECorner.lat().toString()),
        pt2: SWCorner.lng()
          .toString()
          .concat("," + SWCorner.lat().toString()),
        pt3: NWCorner.lng()
          .toString()
          .concat("," + NWCorner.lat().toString()),
        pt4: SECorner.lng()
          .toString()
          .concat("," + SECorner.lat().toString()),
      };

      fetch(
        "https://cowinmapapis.com/data/fetch?" +
          "pt1=" +
          params.pt1 +
          "&pt2=" +
          params.pt2 +
          "&pt3=" +
          params.pt3 +
          "&pt4=" +
          params.pt4
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      console.log("Zoom in more to see resources");
    }
  }

  fetch(resourceUrl)
    .then((response) => response.json())
    .then((data) => {
      for (let city in data) {
        cities.push(new City(city, data[city], afterCityDataFetchCallback));
      }
    });
}

window.initialiseMap = initialiseMap;
