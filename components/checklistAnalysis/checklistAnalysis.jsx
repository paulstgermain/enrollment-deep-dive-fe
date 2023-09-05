"use client";

import dynamic from "next/dynamic";
import { useData } from "@/context/dataContext";
import Graph from "../graphs/Graph";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";

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
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
				<Card sx={{ width: 500, height: 450, marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
						<Typography variant="h6" style={{ fontWeight: 'bold' }}>
							LEGEND:
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>A:</span> Are we asking learners what motivated them to look into BloomTech?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>B:</span> Are we informing learners of the weekly time commitment and the length of the program?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>C:</span> Are they reviewing the value props: job or money back guarantee, flexibility, beginner friendly, try before you buy (Risk Free Trial)?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>D:</span> Are we asking learners if they are looking into competitors?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>E:</span> Are they scheduling another call with the learner?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>F:</span> Are we offering to demo the product?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>G:</span> Are we tasking the learner to complete enrollment and engage with the product?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>H:</span> Do we provide a good overview of the program, tuition options, and expectations?
						</Typography>
						<Typography sx={{ fontSize: '16px', marginBottom: '5px' }}>
							<span style={{ color: 'red', fontWeight: 'bold' }}>I:</span> Are the coaches attempting to overcome objections?
						</Typography>
					</CardContent>
				</Card>
				<Graph graphData={graphData} />
			</div>
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
