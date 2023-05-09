import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { useNavigate } from 'react-router-dom';
import { ContainerPost } from './styles';

const NewPost = () => {
	const navigate = useNavigate();

	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		if (!currentUser) navigate('/');
	}, [currentUser]);
	return (
		<ContainerPost>
			<div>
				<button>add post +</button>
			</div>
		</ContainerPost>
	);
};
export default NewPost;
