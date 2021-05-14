# How to run? 

You will need to uncomment the export statement in `../assets/js/lib/citiesWithResources` so that `citiesWithResources` is accessible. 

```
module.exports.citiesWithResources = citiesWithResources
```

And then simply run the following to generate JSON with lat lng for all cities. 

```
node generateLatLngForCities.js
```

You will have to manually update the `../assets/js/lib/citiesWithResources` with the results. 

