import React from 'react';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/Select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div style={{ display: 'flex' }}>
			<MyInput style={{ marginRight: '10px', height: '100%' }}
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder='Поиск'
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue='Сортировка'
				option={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' }
				]} />
		</div>
	);
};

export default PostFilter;