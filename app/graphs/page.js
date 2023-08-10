import BarGraph from "@/components/graphs/Bar/BarGraph"
import LineGraph from "@/components/graphs/Line/LineGraph"
import PieGraph from "@/components/graphs/Pie/PieGraph"
import ScatterGraph from "@/components/graphs/Scatter/ScatterGraph"

export default function Graphs() {
    return (
        <>
        <h1>This is an example page. Graphs will be rendered in these pages.</h1>
        <BarGraph />
        <LineGraph />
        <PieGraph />
        <ScatterGraph />
        </>
    )
}