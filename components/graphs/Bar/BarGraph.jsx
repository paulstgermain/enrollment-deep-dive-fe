"use client";

import Plot from "react-plotly.js";
import { useData } from "@/context/dataContext";

function getY(data) {
	let timeAvailability = 0;
	let commitmentReadiness = 0;
	let whyJoin = 0;

	data.data && data.data.map((row) => {
		if (row.ec_checklist.time_availability === true) {
			timeAvailability++;
        }
		if (row.ec_checklist.commitment_readiness === true) {
			commitmentReadiness++;
        }
		if (row.ec_checklist.why_join === true) {
            whyJoin++;
        }
	});

	let result = [timeAvailability, commitmentReadiness, whyJoin];

	return result;
}

export default function BarGraph() {
	let data = useData();
    let dataY = getY(data);
	var graphData = [
		{
			x: ["Availability", "Commitment", "Why"],
			y: dataY,
			type: "bar",
		},
	];

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				margin: "50px",
			}}
		>
			<Plot
				data={graphData}
				layout={{
					width: 640,
					height: 480,
					title: "Bar Graph",
				}}
			/>
		</div>
	);
}
