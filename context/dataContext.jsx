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

	useEffect(() => {
		let endpoints = [
			"/fakedata.json",
			"https://enrollmentdeepdive-62360fb06e3e.herokuapp.com/checklist_precision_percent",
			"https://enrollmentdeepdive-62360fb06e3e.herokuapp.com/data-to-json"
		]
		axios.all(endpoints.map((endpoint) => endpointProcessor(endpoint))).then(
			axios.spread((data, checklistPercent, rawData) => {
				let result = { data, checklistPercent, rawData };
				setState({ 
					...state, 
					data: result.data.data, 
					checklistPercent: result.checklistPercent.data, 
					rawData: {
						summaries: JSON.parse(result.rawData.data.summaries),
						transcripts: JSON.parse(result.rawData.data.transcripts)
					},
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
