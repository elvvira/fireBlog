import { useEffect, useState } from 'react';
import { ContainerHome } from './styles';

const Home = () => {
	const [posts, setPosts] = useState();
	useEffect(() => {
		watchPostsChanges(setPosts);
		return () => watchPostsChanges();
	}, []);
	return (
		<ContainerHome>
			<h1>Home</h1>
		</ContainerHome>
	);
};

const watchPostsChanges = setPosts => {
	onSnapshot(blogCollectionReference, snapshot => {
		const allPosts = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}));
		allPosts.lenght === 0 ? setPosts(null) : setPosts(allPosts);
	});
};

export default Home;
