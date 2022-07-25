import React, { useRef, useState } from "react";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'aaa', body: 'bbb' },
		{ id: 12, title: 'aaa2', body: 'bbb2' },
		{ id: 123, title: 'aaa23', body: 'bbb23' },
	])

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			id: Date.now(),
			title,
			body
		}
		setPosts([...posts, newPost])
	}

	return (
		<div className="App">
			<form>
				<MyInput
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
					placeholder='Название' />
				<MyInput
					value={body}
					onChange={e => setBody(e.target.value)}
					type='text'
					placeholder='Описание' />
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title='Список постов 1' />
		</div>
	);
}

export default App;  