// src/Components/ArcGISComponent/FC_Layers.jsx
import React, { useEffect } from 'react';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { labelClass } from "../Othercomp/Label";
import { propertyPopup } from '../Othercomp/PopupComp';
import { fcRestApis } from "./Utils";
import renderer from "../Othercomp/PropertySymbol";  // Import the SimpleRenderer

const FC_Layers = ({ mapview }) => {
  useEffect(() => {
    if (!mapview) return;

    const roadlyr = new FeatureLayer({
      id: "RoadLayer",
      url: fcRestApis + "/0",
      title: "Road"
    });

    const propertylyr = new FeatureLayer({
      id: "PropertyLayer",
      url: fcRestApis + "/1",
      labelingInfo: [labelClass],
      popupTemplate: propertyPopup,
      title: "Property",
      // renderer: uniqueVrenderer  // Apply the SimpleRenderer
    });
    propertylyr.renderer = renderer;

    mapview.map.addMany([roadlyr, propertylyr]);

    return () => {
      if (roadlyr) roadlyr.destroy();
      if (propertylyr) propertylyr.destroy();
    };
  }, [mapview]);

  return null;
};

export default FC_Layers;