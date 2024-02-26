
import React, { useState } from 'react';
import { Rating } from '../Rating';

export default{
	title: 'Rating stories',
	component: Rating
}
export const EmptyRating = () => <Rating value={0} />
export const RatingOne = () => <Rating value={1} />
export const RatingTwo = () => <Rating value={2} />
export const RatingThree = () => <Rating value={3} />