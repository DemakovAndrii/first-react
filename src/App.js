import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'aaa', body: 'bbb' },
		{ id: 12, title: 'aaa2', body: 'bbb2' },
		{ id: 123, title: 'aaa23', body: 'bbb23' },
	])

	return (
		<div className="App">
			<form>
				<input type='text' placeholder='Название' />
				<input type='text' placeholder='Описание' />
				<button>Создать пост</button>
			</form>
			<PostList posts={posts} title='Список постов 1' />
		</div>
	);
}

export default App;  