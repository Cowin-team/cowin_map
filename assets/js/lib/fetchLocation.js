async function fetchLocationDataFromAPI(){
    let locationData = []
    let response = await fetch(COWIN_MAP_DATA_API_URL);
    let jsonData = await response.json();

    Object.keys(jsonData).forEach(function (key) {
        let newObj = jsonData[key];
        newObj['city'] = key;
        locationData.push(newObj);
    });
    return locationData;
}