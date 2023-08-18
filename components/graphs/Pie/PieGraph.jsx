"use client"

import dynamic from "next/dynamic";
const Plot = dynamic(() => { return import("react-plotly.js") }, { ssr: false })

export default function PieGraph() {

    let data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
            <Plot
                data={data}
                layout={{ width: 640, height: 480, title: 'Pie Graph' }}
            />
        </div>
    )
}