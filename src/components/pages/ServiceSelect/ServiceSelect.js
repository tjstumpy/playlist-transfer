import React from 'react'
import ServiceTile from '../../common/ServiceTile/ServiceTile'
import './ServiceSelect.scss'
import { faSpotify, faYoutube, faItunesNote } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const SelectService = ({ serviceType }) => {

	const [selected, setSelected] = useState('none');

	return (
		<div className='service-wrapper'>
			<h1>Choose a {serviceType}</h1>
			<div className='services'>
				<div style={{ color: selected === 'spotify' ? '#1ED761' : '#a9a9a9' }}>
					<ServiceTile service={faSpotify} name='spotify' selectState={setSelected} />
				</div>
				<div style={{ color: selected === 'youtube' ? '#E62117' : '#a9a9a9' }}>
					<ServiceTile service={faYoutube} name='youtube' selectState={setSelected} />
				</div>
				<div style={{ color: selected === 'itunes' ? '#F94C57' : '#a9a9a9' }}>
					<ServiceTile service={faItunesNote} name='itunes' selectState={setSelected} />
				</div>
			</div>
		</div >
	)
}

export default SelectService