"use client"

import Plot from "react-plotly.js";

export default function LineGraph() {
    let trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      };
      
      let trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'scatter'
      };
      
      let data = [trace1, trace2];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
            <Plot
                data={data}
                layout={{ width: 640, height: 480, title: 'Line Graph' }}
            />
        </div>
    )
}