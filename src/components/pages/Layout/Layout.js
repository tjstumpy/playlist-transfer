import React, { useContext } from 'react'
import './Layout.scss'
import ServiceSelect from '../ServiceSelect/ServiceSelect'
import PlaylistSelect from '../PlaylistSelect/PlaylistSelect';
import FormContext from '../../../FormContext'

const Layout = () => {

	const { page, setPage } = useContext(FormContext);

	switch (page) {
		case 0:
			return (
				<div className='layout-wrapper'>
					<ServiceSelect serviceType={'Source'} />
					<div className='btn-wrapper'>
						<button className='btn continue' onClick={() => setPage(1)}>CONTINUE</button>
					</div>
				</div>
			);
		case 1:
			return (
				<div className='layout-wrapper'>
					<ServiceSelect serviceType={'Destination'} />
					<div className='btn-wrapper'>
						<button className='btn back' onClick={() => setPage(0)}>BACK</button>
						<button className='btn continue' onClick={() => setPage(2)}>CONTINUE</button>
					</div>
				</div>
			);
		case 2:
			return (
				<div className='layout-wrapper'>
					<PlaylistSelect />
					<div className='btn-wrapper'>
						<button className='btn back' onClick={() => setPage(1)}>BACK</button>
						<button className='btn continue' onClick={() => setPage(0)}>TRANSFER</button>
					</div>
				</div>
			);
		default:
			return (
				<>ERROR</>
			);
	}
}

export default Layout