import { ReactComponent as StarFilled } from '../../../assets/icons/star-rating-filled.svg';
import { Rating } from 'react-simple-star-rating';
import React from 'react';

export const StarsRating = ({ size = 24, readonly = true, initialValue }) => {
	return (
		<Rating
			fillIcon={<StarFilled width={size} height={size} />}
			emptyIcon={<StarFilled width={size} height={size} />}
			fillColor='#f6c660'
			allowFraction
			readonly={readonly}
			initialValue={initialValue}
		/>
	);
};
