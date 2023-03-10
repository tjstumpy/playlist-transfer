import React, { useContext } from 'react'
import ServiceTile from '../../common/ServiceTile/ServiceTile'
import './ServiceSelect.scss'
// import { faSpotify, faYoutube, faItunesNote } from '@fortawesome/free-brands-svg-icons'
import FormContext from '../../../FormContext'

const ServiceSelect = ({ serviceType }) => {

	const { source, destination, spotify, youtube, itunes } = useContext(FormContext);

	return (
		<div className='service-wrapper'>
			<h1>Choose a {serviceType}</h1>
			{/* <p>Source {source} Destination {destination} </p> */}
			<div className='services'>
				<div style={{ color: (serviceType === 'Source' ? source : destination) === 'spotify' ? '#1ED761' : '#a9a9a9' }}>
					<ServiceTile service={spotify} name='spotify' />
				</div>
				<div style={{ color: (serviceType === 'Source' ? source : destination) === 'youtube' ? '#E62117' : '#a9a9a9' }}>
					<ServiceTile service={youtube} name='youtube' />
				</div>
				<div style={{ color: (serviceType === 'Source' ? source : destination) === 'itunes' ? '#F94C57' : '#a9a9a9' }}>
					<ServiceTile service={itunes} name='itunes' />
				</div>
			</div>
		</div >
	)
}

export default ServiceSelect