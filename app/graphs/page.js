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
import { useData } from "@/context/dataContext"

export default function Graphs() {
    const { state, updateState } = useData();

    const handleTab = (e, newTabNum) => {
        updateState({...state, tabNum: newTabNum})
    }

    return (
        <>
            <div style={{ marginLeft: '150px', marginTop: '15px', width: '625px' }}>
                <Box>
                    <Tabs
                        value={state.tabNum}
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
                {state.tabNum === 0 && <DataGrid />}
                {state.tabNum === 1 && <BarGraph />}
                {state.tabNum === 2 && <LineGraph />}
                {state.tabNum === 3 && <PieGraph />}
                {state.tabNum === 4 && <ScatterGraph />}
            </div>
        </>
    )
}