import React from 'react';
import PropTypes from 'prop-types';
type StarsPropType = {
	color: string
}
export const Star = ({color}: StarsPropType) => {
	return (
		<span className={color? 'red' : 'green'} >Star</span>
	);
};

