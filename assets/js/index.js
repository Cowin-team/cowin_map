function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
  };

  let resourceUrl = "https://cowinmapapis.com/resource/get";
  let cities = [];

  // Listen for the event.
  document.addEventListener("beginBoundsRender", boundsRender, false);

  function boundsRender(e) {
    let boundsResources = e.detail;
    console.log(boundsResources);

    //A new Bounds Object is created to render all the data
    //TODO Set up logic to not rerender already drawn markers
    let DisplayedBounds = new Bounds(
      boundsResources,
      afterCityDataFetchCallback
    );
  }
  //Commented out the previous city based implementation below
  // fetch(resourceUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     for (let city in data) {
  //       cities.push(new City(city, data[city], afterCityDataFetchCallback));
  //     }
  //   });
}

window.initialiseMap = initialiseMap;
