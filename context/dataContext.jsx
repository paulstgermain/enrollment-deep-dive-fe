"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();
const Provider = DataContext.Provider;

export const DataProvider = ({ children }) => {
	const initialData= {
		tabNum: 0
	}
	const [data, setData] = useState(initialData);

	useEffect(() => {
		axios.get("http://localhost:3000/fakedata.json")
			.then((res) => {
				setData({...data, data: res.data});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<DataContext.Provider value={data}>
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
