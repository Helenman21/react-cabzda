import React, { useState } from 'react';
import PropTypes from 'prop-types';
type ButtonsPropsType ={
	isOne: boolean,
	onClick: (isOne: boolean) => void
}
export const Buttons = ({isOne, onClick}: ButtonsPropsType) => {
	console.log('Buttons')
	return (
		<div>
			<button className={isOne? 'green' : ''} onClick={() => { onClick(!isOne)}}>ON</button>
			<button className={!isOne? 'red' : ''} onClick={()=> {onClick(!isOne)}} >OFF</button>
		</div>
	);
};

