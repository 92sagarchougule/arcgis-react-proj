// src/Othercomp/PropertySymbol.js
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";

import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";


const uniqueVrenderer = new UniqueValueRenderer({
  type: "unique-value",  // autocasts as new UniqueValueRenderer()
  field: "Cast",
  defaultSymbol: { type: "simple-fill" },  // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [{
    // All features with value of "North" will be blue
    value: "Reddy",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "blue"
    }
  }, {
    // All features with value of "East" will be green
    value: "Valmiki",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "green"
    }
  }
  , {
    // All features with value of "South" will be red
    value: "Kurubaru",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "red"
    }
  }, {
    // All features with value of "West" will be yellow
    value: "Lingayat",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "yellow"
    }
  },
  {
    // All features with value of "West" will be yellow
    value: "Nekar",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "pink"
    }
  },
  {
    // All features with value of "West" will be yellow
    value: "Banagigaru",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "lightblue"
    }
  },
  {
    // All features with value of "West" will be yellow
    value: "Muslim",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "#ff0000"
    }
  }
  ,
  {
    // All features with value of "West" will be yellow
    value: "Badiger",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "magenta"
    }
  }
  ,
  {
    // All features with value of "West" will be yellow
    value: "Talwar",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "Cyan"
    }
  }
  ,
  {
    // All features with value of "West" will be yellow
    value: "Gondali",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "rgb(131, 63, 170)"
    }
  }

  ,
  {
    // All features with value of "West" will be yellow
    value: "bhovi",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "rgb(31, 156, 52)"
    }
  },
  {
    // All features with value of "West" will be yellow
    value: "Madara",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "rgb(31, 156, 52)"
    }
  },
  {
    // All features with value of "West" will be yellow
    value: "Harijan",
    symbol: {
      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
      color: "rgb(31, 156, 52)"
    }
  },
  {
    value:"Korvar",
      symbol:{
        type:"simple-fill",
        color:"rgb(256,214,236)"
      }
    
  }

],
  // visualVariables: [{
  //   type: "opacity",
  //   field: "POPULATION",
  //   normalizationField: "SQ_KM",
  //   // features with 30 ppl/sq km or below are assigned the first opacity value
  //   stops: [{ value: 100, opacity: 0.15 },
  //           { value: 1000, opacity: 0.90 }]
  // }]
})

// // Define the symbol for your polygons
// const propSym = new SimpleFillSymbol({
// //   type: "simple-fill",  // autocasts as new SimpleFillSymbol()
// //   color: "red",
//   outline: {  // autocasts as new SimpleLineSymbol()
//     color: [0, 0, 0, 1],
//     width: "1px"
//   }
// });

// // Create a renderer using the symbol
// const simpleRenderer = new SimpleRenderer({
//   symbol: propSym
// });

export default uniqueVrenderer;
