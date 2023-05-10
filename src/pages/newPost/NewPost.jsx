import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { useNavigate } from 'react-router-dom';
import { ContainerPost } from './styles';
import { addDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';

const NewPost = () => {
	const navigate = useNavigate();
	const [newPostInfo, setNewPostInfo] = useState({
		titulo: '',
		texto: ''
	});

	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		if (!currentUser) navigate('/');
	}, [currentUser]);

	console.log(currentUser);

	return (
		<ContainerPost>
			<form onSubmit={e => createPost(e, newPostInfo, currentUser)}>
				<div>
					<label htmlFor=''>titulo</label>
					<input
						type='text'
						name=''
						onChange={e =>
							setNewPostInfo({
								...newPostInfo,
								titulo: e.target.value
							})
						}
					/>
				</div>
				<div>
					<label htmlFor=''>texto</label>
					<input
						type='text'
						name=''
						onChange={e =>
							setNewPostInfo({
								...newPostInfo,
								texto: e.target.value
							})
						}
					/>
				</div>
				<button>add post +</button>
			</form>
		</ContainerPost>
	);
};
const createPost = async (e, newPostInfo, currentUser) => {
	e.preventDefault();
	try {
		await addDoc(blogCollectionReference, {
			...newPostInfo,
			date: new Date().toLocaleString(),
			email: currentUser.email
		});
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};
export default NewPost;
