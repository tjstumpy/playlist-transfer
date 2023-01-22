import React from 'react'
import './ServiceTile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useState } from 'react'

const ServiceTile = ({ service, name, selectState }) => {

	// const [isActive, setIsActive] = useState(false);

	// const changeStyle = () => {
	// 	if (name.name == 'spotify') {

	// 	}
	// 	// console.log(name + '-select');
	// 	// setStyle(name.name + '-select')
	// 	setIsActive(current => !current);
	// }

	// const test = () => {
	// 	selected = 'spotify';
	// 	console.log(selected);
	// }

	return (
		<div
			className='service-tile-wrapper'
			id={name}
			onClick={() => selectState(name)}
		>
			<FontAwesomeIcon icon={service} className='service-logo' />
		</div >
	)
}

export default ServiceTile