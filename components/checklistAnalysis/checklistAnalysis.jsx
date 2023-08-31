"use client";

import dynamic from "next/dynamic";
const Plot = dynamic(() => { return import("react-plotly.js") }, { ssr: false })
import { useData } from "@/context/dataContext";
import Graph from "../graphs/Graph";

export default function ChecklistAnalysis() {
	let { state } = useData();
	let graphData = {
		data: [{
			x: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
			y: [
				state.checklistBarGraphData.motivation,
				state.checklistBarGraphData.time_commitment,
				state.checklistBarGraphData.value_props,
				state.checklistBarGraphData.competitors,
				state.checklistBarGraphData.schedule_call,
				state.checklistBarGraphData.demo,
				state.checklistBarGraphData.complete_enrollment,
				state.checklistBarGraphData.good_overview,
				state.checklistBarGraphData.objections,
			],
			type: "bar"
		}],
		layout: {
			width: 640,
			height: 480,
			title: "EC Checklist Count: True"
		}
	}

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				margin: "50px",
			}}
		>
			<Graph graphData={graphData} />
		</div>
	);
}
