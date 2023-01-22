import React, { useContext } from 'react'
import './ServiceTile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormContext from '../../../FormContext'

const ServiceTile = ({ service, name }) => {

	const { page, setSource, setDestination } = useContext(FormContext);

	return (
		<div
			className='service-tile-wrapper'
			id={name}
			onClick={() => page === 0 ? setSource(name) : setDestination(name)}
		>
			<FontAwesomeIcon icon={service} className='service-logo' />
		</div >
	)
}

export default ServiceTile