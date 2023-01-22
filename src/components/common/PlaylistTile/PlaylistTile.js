import React, { useContext } from 'react';
import FormContext from '../../../FormContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PlaylistTile.scss'

const PlaylistTile = ({ type }) => {

	const { source, destination, spotify, youtube, itunes } = useContext(FormContext);
	var icon, style;

	if (type === 'source') {
		icon = (source === 'spotify' ? spotify : (source === 'youtube' ? youtube : itunes))
		style = source;
	} else {
		icon = (destination === 'spotify' ? spotify : (destination === 'youtube' ? youtube : itunes))
		style = destination;
	}

	return (
		<div className='playlist-tile'>
			<FontAwesomeIcon icon={icon} className='service-logo' id={style} />
			<div className='playlist-view'>
				<>h</>
			</div>
		</div>
	)
}

export default PlaylistTile