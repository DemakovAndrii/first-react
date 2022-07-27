import React from 'react';

const MySelect = ({ option, defaultValue, value, onCgange }) => {
	return (
		<select
			value={value}
			onChange={event => onCgange(event.target.value)}
		>
			<option disabled value=''>{defaultValue}</option>
			{option.map(option =>
				<option key={option.value} value={option.value} >
					{option.name}
				</option>
			)}
		</select>
	);
};

export default MySelect;