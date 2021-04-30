var map;
var locations = [];

function initialiseMap() {

  
  // Load data from an example Google spreadsheet that contains latitude and longitude columns using Google Sheets API v4 that returns JSON.
  // Replace the ID of your Google spreadsheet and you API key in the URL:
  // https://sheets.googleapis.com/v4/spreadsheets/ID_OF_YOUR_GOOGLE_SPREADSHEET/values/Sheet1!A2:Q?key=YOUR_API_KEY
  // Also make sure your API key is authorised to access Google Sheets API - you can enable that through your Google Developer console.
  // Finally, in the URL, fix the sheet name and the range that you are accessing from your spreadsheet. 'Sheet1' is the default name for the first sheet.
  $.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1WW1Lu7S8zP85Qzv-Pn7gp_KUxPJZzvrXnGoWOkwcdbw/values/Sheet1!A2:Q?key=AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM", function(data) {
   	
  // data.values contains the array of rows from the spreadsheet. Each row is also an array of cell values.
    	// Modify the code below to suit the structure of your spreadsheet.
    	$(data.values).each(function() {
    		var location = {};
				location.title = this[0];
				location.latitude = parseFloat(this[2]);
        location.longitude = parseFloat(this[3]);

        // location.institution = this[3];
        // location.department = this[4];
        // location.funder = this[0];
        location.url = this[4];
	location.covidbed = this[5];
          locations.push(location);
    	});
      console.log(locations)
      // Center on (0, 0). Map center and zoom will reconfigure later (fitbounds method)
      var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(0, 0)
      };
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
      setLocations(map, locations);
  });
}


function setLocations(map, locations) {
  var bounds = new google.maps.LatLngBounds();
  // Create nice, customised pop-up boxes, to appear when the marker is clicked on
  var infowindow = new google.maps.InfoWindow({
    content: "Content String"
  });
  for (var i = 0; i < locations.length; i++) {
    var new_marker = createMarker(map, locations[i], infowindow);
    bounds.extend(new_marker.position);
  }
  map.fitBounds(bounds);
}

function createMarker(map, location, infowindow) {

  // Modify the code below to suit the structure of your spreadsheet (stored in variable 'location')
  var position = {
    lat: parseFloat(location.latitude),
    lng: parseFloat(location.longitude)
  };
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: location.title,
    description: location.covidbed,
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent('<div>'+
    '<p><strong>' + ((location.url === undefined) ? location.title : ('<a href="' + location.url +'">' + location.title + '</a>')) + '</strong></p>' +
    ((location.covidbed === undefined) ? "" : ('<p><strong>COVID Beds: </strong>' + location.covidbed + '</p>')) +
    '</div>');
    infowindow.open(map, marker);
  });
  return marker;
}
