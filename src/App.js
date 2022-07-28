import React, { useMemo, useRef, useState } from "react";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/Button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import './styles/App.css'
// import MySelect from "./components/UI/Select/MySelect";
// import MyInput from "./components/UI/Input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'bbb', body: 'gfd' },
		{ id: 2, title: 'FFF', body: 'ewre' },
		{ id: 3, title: 'ccc', body: 'dfvxc' },
	])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}


	return (
		<div className="App">
			<MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
				Создать
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0 10px' }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter} />
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов' />
		</div >
	);
}

export default App;  