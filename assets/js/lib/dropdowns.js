window.addEventListener('DOMContentLoaded', async(event) => {
    //get dropdown elements
    let countrySelector = document.getElementById('countrySelector');
    let stateSelector = document.getElementById('stateSelector');
    let citySelector = document.getElementById('citySelector');

    // fetch & clean up state & city info from cowin map api
    let locationData = await fetchLocationDataFromAPI();
    populateCountryNames(locationData, countrySelector);
    populateStateNames(locationData, stateSelector, DEFAULT_COUNTRY_TEXT);

    // get cached user selected location preferences
    const country = window.sessionStorage.getItem(CACHED_COUNTRY_KEY);
    const state = window.sessionStorage.getItem(CACHED_STATE_KEY);
    const city = window.sessionStorage.getItem(CACHED_CITY_KEY);

    if (country != null && state != null && city != null) {
        populateCityNames(locationData, citySelector, state);
        // if cached user selected location preferences are available, set them as selected in the dropdowns
        setSelectedIndex(countrySelector, country);
        setSelectedIndex(stateSelector, state);
        setSelectedIndex(citySelector, city);
    } else {
        addOption(citySelector, DEFAULT_CITY_TEXT, DEFAULT_VALUE);
    }

    // listener for when the country name is changed by the user in the dropdown
    // populate the states in the country in the state drop down
    countrySelector.addEventListener("change", function () {
        populateStateNames(locationData, stateSelector, countrySelector.value);
    });

    
    // listener for when the state name is changed by the user in the dropdown
    // populate the cities in the state in the city drop down
    stateSelector.addEventListener("change", function () {
        populateCityNames(locationData, citySelector, stateSelector.value);
    });

    // listener for when the city name is changed by the user in the dropdown
    // the url & cache gets updated and map gets reloaded
    citySelector.addEventListener("change", function () {
        setBrowserSessionCache(locationData, countrySelector.value, stateSelector.value, citySelector.value);
        let base_url = window.location.origin + window.location.pathname;
        window.location.href = base_url + '?city=' + citySelector.value;
    });
});

function populateCountryNames (locationData, countrySelector) {
    removeOptions(document.getElementById('countrySelector'));
    //addOption(countrySelector, DEFAULT_COUNTRY_TEXT, DEFAULT_COUNTRY_TEXT);
    
    let countryNames = locationData.map(object => {
        return object.country;
    });
    let uniqueCountryNames = [...new Set(countryNames)];
    uniqueCountryNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    uniqueCountryNames.forEach(countryName => {
        addOption(countrySelector, countryName, countryName);
    });
}

function populateStateNames (locationData, stateSelector, country) {
    let stateNames = [];
    locationData.forEach(object => {
        if (object['country'].toLowerCase() === country.toLowerCase()) {
            stateNames.push(object['state']);
        }
    });
    removeOptions(document.getElementById('stateSelector'));
    addOption(stateSelector, DEFAULT_STATE_TEXT, DEFAULT_STATE_VALUE);
    stateNames.forEach(stateName => {
        addOption(stateSelector, stateName, stateName);
    });
}

function populateCityNames (locationData, citySelector, state) {
    let cityNames = [];
    locationData.forEach(object => {
        if (object['state'].toLowerCase() === state.toLowerCase()) {
            cityNames.push(object['city']);
        }
    });
    removeOptions(document.getElementById('citySelector'));
    addOption(citySelector, DEFAULT_CITY_TEXT, DEFAULT_VALUE);
    cityNames.forEach(cityName => {
        addOption(citySelector, cityName, cityName);
    });
}

function addOption (selector, text, value) {
    let option = document.createElement("option");
    option.text = text;
    option.value = value.toLowerCase()
    selector.add(option);
}

function removeOptions (selectElement) {
    let i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}

function setSelectedIndex (selector, selectedValue) {
    for (let i = 0; i < selector.options.length; i++) {
        if (selector.options[i].value === selectedValue) {
            selector.options[i].selected = true;
            break;
        }
    }
}

function setBrowserSessionCache (locationData, country, state, city) {
    window.sessionStorage.setItem(CACHED_COUNTRY_KEY, country);
    window.sessionStorage.setItem(CACHED_STATE_KEY, state);
    window.sessionStorage.setItem(CACHED_CITY_KEY, city);

    locationData.forEach((element) => {
        if (element.city.toLowerCase() === city.toLowerCase()) {
            // this.map.setCenter(new google.maps.LatLng(element.lat, element.lng));
            window.sessionStorage.setItem(CACHED_CITY_LAT, element.lat);
            window.sessionStorage.setItem(CACHED_CITY_LNG, element.lng);
        }
    })
}
