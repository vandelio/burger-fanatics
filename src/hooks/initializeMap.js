import { createMap, createAmplifyGeocoder } from "maplibre-gl-js-amplify";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import "maplibre-gl-js-amplify/dist/public/amplify-geocoder.css"; // Optional CSS for Amplify recommended styling

async function initializeMap() { 
    const el = document.createElement("div");
    el.setAttribute("id", "map");
    document.body.appendChild(el);

    const map = await createMap({
        container: "map",
        center: [-123.1187, 49.2819], // [Longitude, Latitude]
        zoom: 11,
    })

    map.addControl(createAmplifyGeocoder());
}

export default initializeMap();