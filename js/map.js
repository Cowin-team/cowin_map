var map;
var locations = [];
var allCowinMarkers = [];

window.addEventListener("filtersChanged", function(event){
  let drawOptions = {
    shouldHaveCovidBeds: false,
    shouldHaveOxygenBeds: false,
    shouldHaveICUs: false,
    shouldHaveVentilators: false
  }

  event.detail.checkedFilterNames.forEach(function(filterName) {
    if (filterName == "show_covid_beds")  {
      drawOptions.shouldHaveCovidBeds = true;
    } else if (filterName == "show_oxygen_beds")  {
      drawOptions.shouldHaveOxygenBeds = true;
    } else if (filterName == "show_icus")  {
      drawOptions.shouldHaveICUs = true;
    } else if (filterName == "show_ventilators")  {
      drawOptions.shouldHaveVentilators = true;
    }
  });

  drawMarkers(drawOptions);
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
    venti: dataRow[8],
    updatedAt: dataRow[9]
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
    drawMarkers();
  });
}

function drawMarkers(options) {
  let bounds = new google.maps.LatLngBounds();
  allCowinMarkers.forEach(function(cowinMarker) {
    let shouldRenderMarker = true;

    if (options != null) {
      if ((options.shouldHaveCovidBeds && !cowinMarker.hasCovidBeds) ||
        (options.shouldHaveOxygenBeds && !cowinMarker.hasOxygenBeds) ||
        (options.shouldHaveICUs && !cowinMarker.hasICUs) ||
        (options.shouldHaveVentilators && !cowinMarker.hasVentilators)) {

          shouldRenderMarker = false;
        }
    }

    if (shouldRenderMarker) {
      cowinMarker.mapMarker.setMap(map);
      if (!isNaN(cowinMarker.location.latitude) && !isNaN(cowinMarker.location.longitude)) {
        bounds.extend(cowinMarker.mapMarker.position);
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
    <div class="content">
      <h5 class="title is-5 mb-0">
       ${(location.url === undefined) ? location.title : ('<a href="' + location.url +'">' + location.title + '</a>')}
      </h5>
      <p class="is-size-7 mt-1">Updated at: ${location.updatedAt}</p>
      <table class="table has-text-left is-striped is-narrow is-hoverable">
        <tr><th>COVID Beds: </th><td>${location.covidbed}</td></tr>
        <tr><th>Oxygen Beds: </th><td>${location.oxybed}</td></tr>
        <tr><th>ICUs: </th><td>${location.icu}</td></tr>
        <tr><th>Ventilators: </th><td>${location.venti}</td></tr>
      </table>
    </div>
  `
  google.maps.event.addListener(mapMarker, 'click', function() {
    infowindow.setContent(descriptionHtml);
    infowindow.open(map, mapMarker);
  });

  function hasAttribute(attr) {
    if (location[attr] === undefined || location[attr] === "") {
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
