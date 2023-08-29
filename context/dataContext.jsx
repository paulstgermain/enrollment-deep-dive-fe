"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const initialState= {
		tabNum: 0
	}
	const [state, setState] = useState(initialState);

	function endpointProcessor(endpoint) {
		if (endpoint === "https://enrollmentdeepdive-62360fb06e3e.herokuapp.com/data-to-json") {
			return axios.post(endpoint);
		}
		return axios.get(endpoint);
	}

	function rawDataProcessor(rawData) {
		// raw data = {transcripts, summaries}
		let result = [];
		const runs = Object.keys(rawData.transcripts.filename).length;

		for (let i = 0; i<runs; i++) {
			result.push({
				ec_checklist: {
					motivation: rawData.transcripts.checklist_precision[i].A,
					time_commitment: rawData.transcripts.checklist_precision[i].B,
					value_props: rawData.transcripts.checklist_precision[i].C,
					competitors: rawData.transcripts.checklist_precision[i].D,
					schedule_call: rawData.transcripts.checklist_precision[i].E,
					demo: rawData.transcripts.checklist_precision[i].F,
					complete_enrollment: rawData.transcripts.checklist_precision[i].G,
					good_overview: rawData.transcripts.checklist_precision[i].H,
					objections: rawData.transcripts.checklist_precision[i].I
				},
				transcript: rawData.transcripts.transcripts[i],
				// Check with Royce about summaries matching 1:1 with transcripts data
				filename: rawData.transcripts.filename[i]
			})
		}

		return result;
	}

	useEffect(() => {
		let endpoints = [
			"/fakedata.json",
			"https://enrollmentdeepdive-62360fb06e3e.herokuapp.com/checklist_precision_percent",
			"https://enrollmentdeepdive-62360fb06e3e.herokuapp.com/data-to-json"
		]
		axios.all(endpoints.map((endpoint) => endpointProcessor(endpoint))).then(
			axios.spread((data, checklistPercent, rawData) => {
				let result = { data, checklistPercent, rawData };
				rawData = {
					summaries: JSON.parse(result.rawData.data.summaries),
					transcripts: JSON.parse(result.rawData.data.transcripts)
				};
				setState({ 
					...state, 
					data: result.data.data, 
					checklistPercent: result.checklistPercent.data, 
					rawData: rawData,
					realData: rawDataProcessor(rawData),
					totalCalls: Object.keys(JSON.parse(result.rawData.data.transcripts).filename).length
				})
			  })
		)
	}, []);
	
	const updateState = (newState) => {
		setState(newState);
	}

	return (
		<DataContext.Provider value={{ state, updateState }}>
			{children}
		</DataContext.Provider>
	);
};

export function useData() {
	const context = useContext(DataContext);
	if (context === undefined) {
		throw new Error("useData must be used within a DataProvider.");
	}

	return context;
}
