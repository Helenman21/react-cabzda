import React from 'react';
import PropTypes from 'prop-types';
import { Star } from './Star';
type RatingPropsType = {
	value: number
}
export const Rating = ({value}: RatingPropsType) => {
	console.log('Rating')
	const stars = () => {
		if(value === 1 )
		return(
			<div>
				<Star color='red'/>
			</div>
		)	
		if(value === 2 )
		return(
			<div>
				<Star color='red'/>
				<Star color='red'/>
			</div>
		)
		if(value === 3 )
		return(
			<div>
				<Star color='red'/>
				<Star color='red'/>
				<Star color='red'/>
			</div>
		)
		return <span>no stars</span>
	}

	return (
		<div>
			{stars()}
		</div>
	);
};

