window.addEventListener('DOMContentLoaded', async(event) => {
    //get dropdown elements
    let countrySelector = document.getElementById('countrySelector')
    let stateSelector = document.getElementById('stateSelector')
    let citySelector = document.getElementById('citySelector')

    // get cached user selected location preferences
    const country = window.sessionStorage.getItem(cachedCountryKey);
    const state = window.sessionStorage.getItem(cachedStateKey);
    const city = window.sessionStorage.getItem(cachedCityKey);

    // fetch & clean up state & city info from cowin map api
    let locationData = await fetchLocationDataFromAPI();

    if (country != null && state!= null && city != null) {
        // if cached user selected location preferences are available, set them in the dropdowns
        addOption(countrySelector, defaultCountryText, defaultCountryText);
        addOption(stateSelector, state, state);
        addOption(citySelector, city, city);
        populateStateNames(locationData, stateSelector);
    } else {
        populateDefaultDropdowns(locationData, countrySelector, stateSelector, citySelector)
        populateStateNames(locationData, stateSelector)
    }

    // listener for when the state name is changed by the user in the dropdown
    // populate the cities in the state in the city drop down
    stateSelector.addEventListener("change", function () {
        let cityNames = [];
        locationData.forEach(object => {
            if (object['state'].toLowerCase() === stateSelector.value.toLowerCase()) {
                cityNames.push(object['city']);
            }
        });
        removeOptions(document.getElementById('citySelector'));
        addOption(citySelector, defaultCityText, defaultValue);
        cityNames.forEach(cityName => {
            addOption(citySelector, cityName, cityName);
        });
    });

    // listener for when the city name is changed by the user in the dropdown
    // the url & cache gets updated and map gets reloaded
    citySelector.addEventListener("change", function () {
        window.sessionStorage.setItem(cachedCountryKey, countrySelector.value);
        window.sessionStorage.setItem(cachedStateKey, stateSelector.value);
        window.sessionStorage.setItem(cachedCityKey, citySelector.value);
        let base_url = window.location.origin + window.location.pathname;
        window.location.href = base_url + '?city=' + citySelector.value;
    });
});

function populateDefaultDropdowns(citiesAndStatesList, countrySelector, stateSelector, citySelector){
    addOption(countrySelector, defaultCountryText, defaultCountryText);
    addOption(stateSelector, defaultStateText, defaultValue);
    addOption(citySelector, defaultCityText, defaultValue);
}

function populateStateNames(citiesAndStatesList, stateSelector){
    let stateNames = citiesAndStatesList.map(object => {
        return object.state;
    })
    let uniqueStateNames = [...new Set(stateNames)];
    uniqueStateNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    uniqueStateNames.forEach(stateName => {
        addOption(stateSelector, stateName, stateName);
    });
}

function addOption(selector, text, value) {
    let option = document.createElement("option");
    option.text = text;
    option.value = value.toLowerCase()
    selector.add(option)
}

function removeOptions(selectElement) {
    let i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}
