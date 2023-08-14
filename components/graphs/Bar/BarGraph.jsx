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
        <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
            <Plot
                data={data}
                layout={{ width: 640, height: 480, title: 'Bar Graph' }}
            />
        </div>
    )
}