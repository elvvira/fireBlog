import { useContext, useEffect, useState } from 'react';
import {
	ButtonDeletePost,
	ButtonEditPost,
	ContainerHome,
	ContainerPost,
	DeleteImg,
	FlexPosts,
	PostImg
} from './styles';
import { blogCollectionReference } from '../../config/firebase.config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../../contexts/Auth.context';
import DeleteModal from '../../components/deleteModal/DeleteModal';
import Modal from '../../components/modal/Modal';
import EditModal from '../../components/editModal/EditModal';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [showDelete, setShowDelete] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
		});
		return () => subscribeToData();
	}, []);
	console.log(posts);

	return (
		<ContainerHome>
			<h1>Home</h1>
			<FlexPosts>
				{posts.map(post => {
					// console.log(post.img);
					return (
						<ContainerPost key={post.id} onClick={() => getPostById(post.id)}>
							<PostImg
								src={!post.img ? 'public/images/noPhoto.png' : post.img}
								alt=''
							/>
							<h3>{post.titulo}</h3>
							<p>{post.texto}</p>
							{currentUser && post.email === currentUser.email && (
								<div>
									<ButtonDeletePost
										onClick={() =>
											setShowDelete(
												<DeleteModal
													setShowDelete={setShowDelete}
													id={post.id}
												/>
											)
										}
									>
										<DeleteImg src='public/images/trash-solid.svg' alt='' />
									</ButtonDeletePost>
									<ButtonEditPost
										onClick={() =>
											setShowEdit(
												<EditModal
													setShowEdit={setShowEdit}
													titulo={post.titulo}
													texto={post.texto}
													id={post.id}
												/>
											)
										}
									>
										edit
									</ButtonEditPost>
								</div>
							)}
						</ContainerPost>
					);
				})}
				<Modal setShowDelete={setShowDelete}>{showDelete}</Modal>
				<Modal setShowEdit={setShowEdit}>{showEdit}</Modal>
			</FlexPosts>
		</ContainerHome>
	);
};

const getPostById = async id => {
	const postReference = doc(blogCollectionReference, id);
	try {
		const postToRead = await getDoc(postReference);
		console.log(postToRead.data());
	} catch (err) {
		console.log(err);
	}
};
export default Home;
