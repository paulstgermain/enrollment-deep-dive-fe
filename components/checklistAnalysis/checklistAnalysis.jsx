"use client";

import dynamic from "next/dynamic";
const Plot = dynamic(() => { return import("react-plotly.js") }, { ssr: false })
import { useData } from "@/context/dataContext";
import Graph from "../graphs/Graph";

export default function ChecklistAnalysis() {
	let { state } = useData();
	let yValue = [
		state.checklistPercent["A"],
		state.checklistPercent["B"],
		state.checklistPercent["C"],
		state.checklistPercent["D"],
		state.checklistPercent["E"],
		state.checklistPercent["F"],
		state.checklistPercent["G"],
		state.checklistPercent["H"],
		state.checklistPercent["I"],
	];
	let graphData = {
		data: [{
			x: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
			y: yValue,
			type: "bar",
			text: yValue.map(String),
			textposition: 'auto',
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
				flexDirection: "column",
				justifyContent: "center",
				margin: "50px",
			}}
		>
			<Graph graphData={graphData} />
			<div
				style={{
					width: "100%",
					height: "auto",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
					flexWrap: "wrap"
				}}
			>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["A"], (100 - state.checklistPercent["A"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "A. Motivation"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["B"], (100 - state.checklistPercent["B"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "B. Time Commitment"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["C"], (100 - state.checklistPercent["C"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "C. Value Props"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["A"], (100 - state.checklistPercent["A"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "D. Competitors"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["E"], (100 - state.checklistPercent["E"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "A. Schedule Call"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["F"], (100 - state.checklistPercent["F"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "F. Demo"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["G"], (100 - state.checklistPercent["G"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "G. Complete Enrollment"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["H"], (100 - state.checklistPercent["H"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "H. Good Overview"
					}
				}}
				/>
				<Graph graphData={{
					data: [{
						values: [state.checklistPercent["I"], (100 - state.checklistPercent["I"])],
					labels: ['True', 'False'],
					type: 'pie'
					}],
					layout: {
						width: 300,
						height: 300,
						title: "I. Objections"
					}
				}}
				/>
			</div>
		</div>
	);
}
