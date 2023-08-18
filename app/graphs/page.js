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
            <div style={{ marginLeft: '150px', marginTop: '15px', width: '625px' }}>
                <Box>
                    <Tabs
                        value={tabNum}
                        onChange={handleTab}
                        textColor='primary'
                        indicatorColor='secondary'
                    >
                        <Tab value={0} label="Data Grid" />
                        <Tab value={1} label="Bar Graph" />
                        <Tab value={2} label="Line Graph" />
                        <Tab value={3} label="Pie Graph" />
                        <Tab value={4} label="Scatter Graph" />
                    </Tabs>
                </Box>
            </div>
            <div>
                {tabNum === 0 && <DataGrid />}
                {tabNum === 1 && <BarGraph />}
                {tabNum === 2 && <LineGraph />}
                {tabNum === 3 && <PieGraph />}
                {tabNum === 4 && <ScatterGraph />}
            </div>
        </>
    )
}