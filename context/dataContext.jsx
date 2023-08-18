"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();
const Provider = DataContext.Provider;

export const DataProvider = ({ children }) => {
	const initialState= {
		tabNum: 0
	}
	const [state, setState] = useState(initialState);

	useEffect(() => {
		axios.get("http://localhost:3000/fakedata.json")
			.then((res) => {
				setState({...state, data: res.data});
			})
			.catch((err) => {
				console.log(err);
			});
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
