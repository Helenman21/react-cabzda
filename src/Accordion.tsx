import React from 'react';
import PropTypes from 'prop-types';
type AcordionType = {
	isOn: boolean
	onClick: (isOn: boolean) => void
	name: string
}
export const Accordion = ({isOn, onClick, name}: AcordionType) => {
	console.log('Accordion')
	return (
		<div>
			  <section className='section-accordion' >
			  <button className='red' onClick={() => onClick(!isOn)} >+</button><h1>{name}</h1>
			{
				isOn && <ul>
					<li>item</li>
					<li>item</li>
					<li>item</li>
				</ul>
			}
		  </section>
		
		</div>
	);
};

