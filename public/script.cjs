const fs = require('fs');
// Read existing GeoJSON data
const rawData = fs.readFileSync('public/geoSimplified.json');
const geojson = JSON.parse(rawData);
// Filter out features with null geometry
const cleanedGeoJSON = geojson.features.filter(feature => feature.geometry !== null);
// Write cleaned data to a new file
fs.writeFileSync('public/cleaned_geo.json', JSON.stringify({type: 'FeatureCollection', features: cleanedGeoJSON}));
