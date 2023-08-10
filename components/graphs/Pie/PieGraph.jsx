"use client"

import Plot from "react-plotly.js";

export default function PieGraph() {

    let data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];

    return (
        <>
            <Plot
                data={data}
                layout={{ width: 320, height: 240, title: 'Pie Graph' }}
            />
        </>
    )
}