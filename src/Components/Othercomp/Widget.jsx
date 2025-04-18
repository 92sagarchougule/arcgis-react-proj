import React, { useEffect } from 'react';
import Popup from "@arcgis/core/widgets/Popup";
import LayerList from "@arcgis/core/widgets/LayerList";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import Search from "@arcgis/core/widgets/Search";

// ArcGIS Web Component
import "@arcgis/map-components/components/arcgis-scale-bar";

const Widget = ({ mapview }) => {
  useEffect(() => {
    if (!mapview) return;

    let isMounted = true;

    let searchWidget,
        expandsearchWidget,
        highlightHandle = null;

    // --- Popup ---
    const popup = new Popup({ view: mapview });
    popup.id = "customPopup";
    mapview.ui.add(popup);

    // --- Layer List ---
    const lyrlist = new LayerList({
      view: mapview,
      visibilityAppearance: "checkbox"
    });

    const lyrlistexpand = new Expand({
      view: mapview,
      content: lyrlist,
      expandTooltip: "Layer List",
      expandIconClass: "esri-icon-layer-list",
      id: "layerListExpand"
    });

    mapview.ui.add(lyrlistexpand, "top-right");

    // --- Legend ---
    const legend = new Legend({ view: mapview });

    const legendexpand = new Expand({
      view: mapview,
      content: legend,
      id: "legendExpand"
    });

    mapview.ui.add(legendexpand, "bottom-right");

    // --- Property Layer Search ---
    const propertyLayer = mapview.map.allLayers.find(layer => layer.title === "Property");

    async function setupSearch() {
      if (!propertyLayer) {
        console.warn("Property layer not found in the map.");
        return;
      }

      try {
        await propertyLayer.load();
        if (!isMounted) return;

        const searchableFields = propertyLayer.fields
          .filter(field => field.type === 'string')
          .map(field => field.name);

        if (searchableFields.length === 0) {
          console.warn("No searchable fields found on Property layer.");
          return;
        }

        searchWidget = new Search({
          view: mapview,
          sources: [
            {
              layer: propertyLayer,
              searchFields: searchableFields,
              displayField: searchableFields[0],
              exactMatch: false,
              outFields: ['*'],
              name: 'Property Search',
              placeholder: 'Search by any field'
            }
          ]
        });

        searchWidget.on("search-complete", async (event) => {
          try {
            const results = event.results[0];
            if (!results) return;

            const features = results.results.map(r => r.feature);
            if (features.length === 0) return;

            const layerView = await mapview.whenLayerView(propertyLayer);
            if (!isMounted) return;

            if (highlightHandle) highlightHandle.remove();

            const objectIds = features.map(f => f.attributes[propertyLayer.objectIdField]);
            highlightHandle = layerView.highlight(objectIds);

            const extentResult = await propertyLayer.queryExtent({
              where: `${propertyLayer.objectIdField} IN (${objectIds.join(',')})`
            });

            if (extentResult?.extent) {
              mapview.goTo(extentResult.extent.expand(1.5));
            }
          } catch (err) {
            if (err.name !== "AbortError") {
              console.error("Search complete error:", err);
            }
          }
        });

        expandsearchWidget = new Expand({
          view: mapview,
          content: searchWidget,
          expandTooltip: "Search Properties",
          expandIconClass: "esri-icon-search",
          id: "searchExpand"
        });

        mapview.ui.add(expandsearchWidget, "top-right");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Failed to load Property layer or configure search:", err);
        }
      }
    }

    setupSearch();

    // --- ArcGIS Scale Bar ---
    const scaleBar = document.querySelector("arcgis-scale-bar");
    if (scaleBar) {
      scaleBar.view = mapview;
    }

    // --- Cleanup ---
    return () => {
      isMounted = false;

      if (popup) popup.destroy();
      if (lyrlistexpand) lyrlistexpand.destroy();
      if (legendexpand) legendexpand.destroy();

      if (expandsearchWidget) {
        mapview.ui.remove(expandsearchWidget);
        expandsearchWidget.destroy();
      }
      if (searchWidget) searchWidget.destroy();

      if (highlightHandle) highlightHandle.remove();
    };
  }, [mapview]);

  return (
    <arcgis-scale-bar
      position="bottom-left"
      unit="dual"
      style={{
        position: 'absolute',
        bottom: '16px',
        left: '12px',
        zIndex: 10
      }}
    ></arcgis-scale-bar>
  );
};

export default Widget;
