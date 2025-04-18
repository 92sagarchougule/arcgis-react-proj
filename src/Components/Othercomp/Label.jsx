const labelClass = {  // autocasts as new LabelClass()
            symbol: {
              type: "text",  // autocasts as new TextSymbol()
              color: "black",
            //   haloColor: "blue",
            //   haloSize: 1,
              font: {  // autocast as new Font()
                 family: "Ubuntu Mono",
                 size: 10,
                //  weight: "bold"
               }
            },
            labelPlacement: "above-right",
            labelExpression: '[PropertyNo]',
            // labelExpressionInfo: {
            //   expression: "$feature.Team + TextFormatting.NewLine + $feature.Division"
            // },
            maxScale: 0,
            minScale: 25000
          };

          export{labelClass};