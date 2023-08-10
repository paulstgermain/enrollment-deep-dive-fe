"use client"

import Plot from "react-plotly.js";

export default function BarGraph() {

    var data = [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          type: 'bar'
        }
      ];

    return (
        <>
            <Plot
                data={data}
                layout={{ width: 320, height: 240, title: 'Bar Graph' }}
            />
        </>
    )
}