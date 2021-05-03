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

  let chennaiCity = new City(
    "Chennai",
    {
      covidBeds: "1YV3DWGxsvlTp0-vaw8f09AajQ5cl3MovFvWVVDtkbOc"
    },
    afterCityDataFetchCallback
  );

  let salemCity = new City(
    "Salem",
    {
      covidBeds: "1GlNu4jyK_nkI2KwEBe9Wc6qgW1bCxbrH9v8cUJDJWrs"
    },
    afterCityDataFetchCallback
  );
}

window.initialiseMap = initialiseMap;
