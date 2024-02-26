import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const UnControledButtons = () => {
	const [state, setState] = useState(false)
	return (
		<div>
			<button className={state? 'green' : ''} onClick={() => { setState(!state)}}>ON</button>
			<button className={!state? 'red' : ''} onClick={()=> {setState(!state)}} >OFF</button>
		</div>
	);
};
