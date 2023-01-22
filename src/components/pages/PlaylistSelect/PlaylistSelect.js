// import React, { useContext } from 'react';
import React from 'react';
// import FormContext from '../../../FormContext'

import PlaylistTile from '../../common/PlaylistTile/PlaylistTile'
import './PlaylistSelect.scss'

const PlaylistSelect = () => {

	// const { source, destination, spotify, youtube, itunes } = useContext(FormContext);

	return (
		<div className='playlist-wrapper'>
			<PlaylistTile type='source' />
			<PlaylistTile type='destination' />
		</div>
	)
}

export default PlaylistSelect