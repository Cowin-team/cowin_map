import City from '../city'
import CowinMap from '../cowinMap'

function initialiseMap() {
  let cowinMap = new CowinMap();

  let afterCityDataFetchCallback = (cowinMapMarkers) => {
    cowinMapMarkers.forEach((cowinMapMarker) => {
      cowinMap.setupAndPlotCowinMapMarker(cowinMapMarker);
    });
    cowinMap.plotAllCowinMapMarkers();
  };

  let coimbatorCity = new City(
    "coimbatore",
    {
      covidBeds: "1WW1Lu7S8zP85Qzv-Pn7gp_KUxPJZzvrXnGoWOkwcdbw",
      oxygenSupply: "1Ry3y1hx1iHeuF17YmWtzfaDQdhx5zRr6lSLrzBW_TU0"
    },
    afterCityDataFetchCallback
  );

  let tiripurCity = new City(
    "tirupur",
    {
      covidBeds: "1T5fUP5nhCctC2bpNWeO4Yg2UYrewbTxrGh58c2zJePU"
    },
    afterCityDataFetchCallback
  );

  let maduraiCity = new City(
    "Madurai",
    {
      covidBeds: "1Dr7DYS6GKe5avhHcwhHMB6Z9DTFSj20eEgLvfBlQJSo"
    },
    afterCityDataFetchCallback
  );
}
window.initialiseMap = initialiseMap;
