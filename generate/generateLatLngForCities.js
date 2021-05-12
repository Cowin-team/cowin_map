const citiesWithResources = require("../assets/js/lib/citiesWithResources");

function googleGeoCode(address) {
    const googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyClGVndCtMIDvZ7GdE1fO5OPQL5XdtMvVM',
        Promise: Promise
    });

    return googleMapsClient.geocode({ address: address }).asPromise();
}

async function getGeoCode(cityObj) {
    try {
        const response = await googleGeoCode(cityObj.city);

        if (response.status === 200) {
            let location = response.json.results[0].geometry.location;
            cityObj['lat'] = location.lat;
            cityObj['lng'] = location.lng;
        }
    } catch (error) {
        console.log(error)
    }

    return cityObj;
}

const getData = async () => {
    return Promise.all(citiesWithResources
        .citiesWithResources
        .map((element) => {
            return getGeoCode(element)
        }))
}

getData().then(data => {
    console.log(data)
})