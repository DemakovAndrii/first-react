import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css'
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import Pagination from "./components/UI/pagination/Pagination";


function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(
			// getPageCount
			(totalCount, limit));
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [])

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page);
		fetchPosts(limit, page)
	}

	return (
		<div className="App">
			<MyButton onClick={fetchPosts}>Get Posts</MyButton>
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
			{postError &&
				<h1>Произошла ошибка ${postError}</h1>}
			{isPostsLoading
				? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты' />}
			{/* <Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages} /> */}
		</div >
	);
}

export default App;  