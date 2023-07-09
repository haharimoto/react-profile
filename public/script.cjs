const fs = require('fs');
// Read existing GeoJSON data
const rawData = fs.readFileSync('public/geoSimplified.json');
const geojson = JSON.parse(rawData);
// Filter out features with null geometry
const cleanedGeoJSON = geojson.features.filter(feature => feature.geometry !== null);
// Write cleaned data to a new file
fs.writeFileSync('public/cleaned_geo.json', JSON.stringify({type: 'FeatureCollection', features: cleanedGeoJSON}));


// file was used to simplify geojson file generated on http://geojson.xyz/
// but it is not needed after reverting back to using the one from https://geojson-maps.ash.ms/
// need to use command (node script.cjs) to run this file
