import dynamic from "next/dynamic";
const Plot = dynamic(() => { return import("react-plotly.js") }, { ssr: false })

export default function Graph(graphData) {
    console.log(graphData.graphData)
    return (
    <Plot
        data={graphData.graphData.data}
        layout={graphData.graphData.layout}
    />
    )
}