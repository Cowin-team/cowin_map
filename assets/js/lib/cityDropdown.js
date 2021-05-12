
window.addEventListener('DOMContentLoaded', (event) => {
    let citySelector = document.getElementById('citySelector')

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    let option = document.createElement("option");
    option.text = "-- Change city --";
    option.value = 'default'
    citySelector.add(option)

    citiesWithResources.forEach(element => {
        let option = document.createElement("option");
        option.text = element.city;
        option.value = element.city.toLowerCase()
        citySelector.add(option)
    });

    if (city != undefined) {
        citySelector.value = city.toLowerCase()
    }

    citySelector.addEventListener("change", function () {
        let base_url = window.location.origin + window.location.pathname;

        let url = base_url + '?city=' + citySelector.value
        window.location.href = url;
    });
});
