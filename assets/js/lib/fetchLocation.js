async function fetchLocationDataFromAPI(){
    let locationData = []
    let response = await fetch(cowinMapDataAPIUrl);
    let jsonData = await response.json();
    window.sessionStorage.setItem(cachedCowinMapDataKey, JSON.stringify(jsonData));

    Object.keys(jsonData).forEach(function (key) {
        let newObj = jsonData[key];
        newObj['city'] = key;
        locationData.push(newObj);
    });
    return locationData;
}

async function fetchCachedLocationData(cachedLocationData){
    let locationData = []
    Object.keys(JSON.parse(cachedLocationData)).forEach(function (key) {
        let newObj = JSON.parse(cachedLocationData)[key];
        newObj['city'] = key;
        locationData.push(newObj);
    });
    return locationData;
}