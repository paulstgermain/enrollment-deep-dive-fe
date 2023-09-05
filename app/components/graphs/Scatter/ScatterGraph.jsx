"use client"

import dynamic from "next/dynamic";
const Plot = dynamic(() => { return import("react-plotly.js") }, { ssr: false })

export default function ScatterGraph() {

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        type: 'scatter'
      };
      
      var trace2 = {
        x: [2, 3, 4, 5],
        y: [16, 5, 11, 9],
        mode: 'lines',
        type: 'scatter'
      };
      
      var trace3 = {
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines+markers',
        type: 'scatter'
      };
      
      var data = [trace1, trace2, trace3];

    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
        <Plot
                data={data}
                layout={{ width: 640, height: 480, title: 'Scatter Graph' }}
            />
      </div>
    )
}