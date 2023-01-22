import React, { useState } from 'react'
import './Layout.scss'
import SelectService from '../ServiceSelect/ServiceSelect'
import PlaylistSelect from '../PlaylistSelect/PlaylistSelect';

const Layout = () => {

	const [step, setStep] = useState(0);

	// console.log(step.step);

	switch (step.step) {
		case 0:
			return (
				<div className='layout-wrapper' data-aos="fade-up">
					<SelectService serviceType={'Source'} />
					<div className='btn-wrapper'>
						<button className='btn continue' onClick={() => setStep({ step: 1 })}>CONTINUE</button>
					</div>
				</div>
			);
		case 1:
			return (
				<div className='layout-wrapper' data-aos="fade-up">
					<SelectService serviceType={'Destination'} />
					<div className='btn-wrapper'>
						<button className='btn back' onClick={() => setStep({ step: 0 })}>BACK</button>
						<button className='btn continue' onClick={() => setStep({ step: 2 })}>CONTINUE</button>
					</div>
				</div>
			);
		case 2:
			return (
				<div className='layout-wrapper' data-aos="fade-up">
					<PlaylistSelect />
					<div className='btn-wrapper'>
						<button className='btn back' onClick={() => setStep({ step: 1 })}>BACK</button>
						<button className='btn continue' onClick={() => setStep({ step: 3 })}>SUBMIT</button>
					</div>
				</div>
			);
		default:
			console.log(step);
			return (
				<div className='layout-wrapper' data-aos="fade-up">
					<SelectService serviceType={'Source'} />
					<div className='btn-wrapper'>
						<button className='btn continue' onClick={() => setStep({ step: 1 })}>CONTINUE</button>
					</div>
				</div>
			);
	}
}

export default Layout