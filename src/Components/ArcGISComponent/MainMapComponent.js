import React, { useEffect, useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import "@arcgis/core/assets/esri/themes/light/main.css";
import FC_Layers from "./FC_Layers";
import Widget from "../Othercomp/Widget";

const MainMapComponent = () => {
  const mapRef = useRef(null);

  var map;

  const [mapView, setMapView] = useState(null)

  useEffect(() => {
    if (!mapRef.current) return;

    map = new Map({
      basemap: "streets", // Very commonly available basemap
    });

    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [75.885458, 15.070060], 
      zoom:16.4,
    });


    setMapView(view); //set map view of map

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return (
    <div ref={mapRef} style={{ width: "100vw", height: "100vh" }}>
        {mapView && <FC_Layers mapview={mapView} />}
        {mapView && <Widget mapview={mapView} />}
    </div>
  );
};

export default MainMapComponent;
