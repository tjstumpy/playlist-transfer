import { createContext, useState } from "react";
import { faSpotify, faYoutube, faItunesNote } from '@fortawesome/free-brands-svg-icons'

const FormContext = createContext();

export function FormProvider({ children }) {

	const [page, setPage] = useState(0);

	const [source, setSource] = useState('s');

	const [destination, setDestination] = useState('d');

	const spotify = faSpotify;
	const youtube = faYoutube;
	const itunes = faItunesNote;

	const values = {
		page, setPage,
		source, setSource,
		destination, setDestination,
		spotify, youtube, itunes
	}

	return (
		<FormContext.Provider value={values}>
			{children}
		</FormContext.Provider>
	)
}

export default FormContext