var map;
var locations = [];
var allCowinMarkers = [];

window.addEventListener("filtersChanged", function(event){
  let drawOptions = {
    showCovidBeds: false,
    showOxygenBeds: false,
    showICUs: false,
    showVentilators: false
  }
  let anyOptionsTrue = false;

  event.detail.checkedFilterNames.forEach(function(filterName) {
    if (filterName == "show_covid_beds")  {
      drawOptions.showCovidBeds = true;
    } else if (filterName == "show_oxygen_beds")  {
      drawOptions.showOxygenBeds = true;
    } else if (filterName == "show_icus")  {
      drawOptions.showICUs = true;
    } else if (filterName == "show_ventilators")  {
      drawOptions.showVentilators = true;
    }
  });

  if (drawOptions.showCovidBeds == false &&
    drawOptions.showOxygenBeds == false &&
    drawOptions.showICUs == false &&
    drawOptions.showVentilators == false) {

    drawMarkers({
      showCovidBeds: true,
      showOxygenBeds: true,
      showICUs: true,
      showVentilators: true
    });
  } else {
    drawMarkers(drawOptions);
  }
});

function locationFromDataRow(dataRow) {
  let location = {
    title: dataRow[0],
    latitude: parseFloat(dataRow[2]),
    longitude: parseFloat(dataRow[3]),
    // institution: dataRow[3],
    // department: dataRow[4],
    // funder: dataRow[0],
    url: dataRow[4],
    covidbed: dataRow[5],
    oxybed: dataRow[6],
    icu: dataRow[7],
    venti: dataRow[8]
  }

  if (location.covidbed === undefined) { location.covidbed = "N/A" };
  if (location.oxybed === undefined) { location.oxybed = "N/A" };
  if (location.icu === undefined) { location.icu = "N/A" };
  if (location.venti === undefined) { location.venti = "N/A" };

  return location;
};

function initialiseMap() {
  // Center on (0, 0). Map center and zoom will reconfigure later (fitbounds method)
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(0, 0)
  });

  var infowindow = new google.maps.InfoWindow({
    content: "Content String"
  });

  // Load data from an example Google spreadsheet that contains latitude and longitude columns using Google Sheets API v4 that returns JSON.
  // Replace the ID of your Google spreadsheet and you API key in the URL:
  // https://sheets.googleapis.com/v4/spreadsheets/ID_OF_YOUR_GOOGLE_SPREADSHEET/values/Sheet1!A2:Q?key=YOUR_API_KEY
  // Also make sure your API key is authorised to access Google Sheets API - you can enable that through your Google Developer console.
  // Finally, in the URL, fix the sheet name and the range that you are accessing from your spreadsheet. 'Sheet1' is the default name for the first sheet.
  $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1WW1Lu7S8zP85Qzv-Pn7gp_KUxPJZzvrXnGoWOkwcdbw/values/Sheet1!A2:Q?key=AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM", function(data) {
    // data.values contains the array of rows from the spreadsheet.
    // Each row is also an array of cell values.
    data.values.forEach(function(dataRow) {
      let location = locationFromDataRow(dataRow);
      locations.push(location);
    });
    locations.forEach(function(location){
      allCowinMarkers.push(createCowinMarker(map, location, infowindow));
    });
    drawMarkers({
      showCovidBeds: true,
      showOxygenBeds: true,
      showICUs: true,
      showVentilators: true
    });
  });
}

function drawMarkers(filters) {
  let bounds = new google.maps.LatLngBounds();
  allCowinMarkers.forEach(function(cowinMarker) {
    if ((filters.showCovidBeds && cowinMarker.hasCovidBeds) ||
      (filters.showOxygenBeds && cowinMarker.hasOxygenBeds) ||
      (filters.showICUs && cowinMarker.hasICUs) ||
      (filters.showVentilators && cowinMarker.hasVentilators)) {

      cowinMarker.mapMarker.setMap(map);
      if (!isNaN(cowinMarker.location.latitude) && !isNaN(cowinMarker.location.longitude)) {
        bounds.extend(cowinMarker.mapMarker.position);
      } else {
      }
    } else {
      cowinMarker.mapMarker.setMap(null);
    }
  });
  map.fitBounds(bounds);
}

function createCowinMarker(map, location, infowindow) {
  // Modify the code below to suit the structure of your spreadsheet (stored in variable 'location')
  var position = {
    lat: parseFloat(location.latitude),
    lng: parseFloat(location.longitude)
  };
  var mapMarker = new google.maps.Marker({
    position: position,
    map: null,
    title: location.title
  });

  let descriptionHtml = `
    <div>
      <p>
       ${(location.url === undefined) ? location.title : ('<a href="' + location.url +'">' + location.title + '</a>')}
      </p>
      <p><strong>COVID Beds: </strong>${location.covidbed}</p>
      <p><strong>Oxygen Beds: </strong>${location.oxybed}</p>
      <p><strong>ICUs: </strong>${location.icu}</p>
      <p><strong>Ventilators: </strong>${location.venti}</p>
    </div>
  `
  google.maps.event.addListener(mapMarker, 'click', function() {
    infowindow.setContent(descriptionHtml);
    infowindow.open(map, mapMarker);
  });

  function hasAttribute(attr) {
    if (location[attr] === undefined || location["attr"] === "") {
      return false;
    }
    if (isNaN(location[attr])) {
      return false;
    }
    if (parseFloat(location[attr]) < 1) {
      return false;
    }

    return true;
  }

  return {
    location: location,
    mapMarker: mapMarker,
    hasCovidBeds: hasAttribute("covidbed"),
    hasOxygenBeds: hasAttribute("oxybed"),
    hasICUs: hasAttribute("icu"),
    hasVentilators: hasAttribute("venti")
  };
}
