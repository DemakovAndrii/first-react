// 1.19.00







import React, { useMemo, useRef, useState } from "react";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/Button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import './styles/App.css'
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'bbb', body: 'gfd' },
		{ id: 2, title: 'FFF', body: 'ewre' },
		{ id: 3, title: 'ccc', body: 'dfvxc' },
	])

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts;
	}, [selectedSort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.includes(searchQuery))
	}, [searchQuery, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<div>
				<MyInput
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					placeholder='Поиск'
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue='Сортировка'
					option={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' }
					]} />
			</div>
			{posts.length
				? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов' />
				: <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
			}
		</div>
	);
}

export default App;  