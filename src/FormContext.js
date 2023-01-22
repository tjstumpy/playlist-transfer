import { createContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {

	const [page, setPage] = useState(0);

	const [source, setSource] = useState('s');

	const [destination, setDestination] = useState('d');

	const values = {
		page, setPage,
		source, setSource,
		destination, setDestination
	}

	return (
		<FormContext.Provider value={values}>
			{children}
		</FormContext.Provider>
	)
}

export default FormContext