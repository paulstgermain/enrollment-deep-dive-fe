"use client"

import { useState } from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import BarGraph from "@/components/graphs/Bar/BarGraph"
import LineGraph from "@/components/graphs/Line/LineGraph"
import PieGraph from "@/components/graphs/Pie/PieGraph"
import ScatterGraph from "@/components/graphs/Scatter/ScatterGraph"
import DataGrid from "@/components/graphs/Table/Table"

export default function Graphs() {
    const [tabNum, setTabNum] = useState(0)

    const handleTab = (e, newTabNum) => {
        setTabNum(newTabNum)
    }

    return (
        <>
            <div>
                <Box>
                    <Tabs
                        value={tabNum}
                        onChange={handleTab}
                        textColor='primary'
                        indicatorColor='secondary'
                    >
                        <Tab value={0} label="Bar Graph" />
                        <Tab value={1} label="Line Graph" />
                        <Tab value={2} label="Pie Graph" />
                        <Tab value={3} label="Scatter Graph" />
                        <Tab value={4} label="Data Grid" />
                    </Tabs>
                </Box>
            </div>
            <div>
                {tabNum === 0 && <BarGraph />}
                {tabNum === 1 && <LineGraph />}
                {tabNum === 2 && <PieGraph />}
                {tabNum === 3 && <ScatterGraph />}
                {tabNum === 4 && <DataGrid />}
            </div>
        </>
    )
}