function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
  };

  let resourceUrl = "https://cowinmapapis.com/resource/get";
  let cities = [];

  let boundsList = [];

  //const event = new Event("build");
  // Listen for the event.
  document.addEventListener("beginBoundsRender", boundsRender, false);

  function boundsRender(e) {
    let boundsResources = e.detail;
    console.log("Inside beginBoundsRender event");
    console.log(boundsResources);
    //Clear boundsList
    //boundsList.push(new Bounds(boundsResources, afterCityDataFetchCallback));
    let DisplayedBounds = new Bounds(
      boundsResources,
      afterCityDataFetchCallback
    );
  }

  // Dispatch the event.

  //Create a new bounds object that accepts a callback, we wouldn't need a bound array
  //since we are onky dealing with one bounds at a time

  // fetch(resourceUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     for (let city in data) {
  //       cities.push(new City(city, data[city], afterCityDataFetchCallback));
  //     }
  //   });
}

window.initialiseMap = initialiseMap;
