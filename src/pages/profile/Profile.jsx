import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { ContainerProfile } from './styles';

const Profile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		if (!currentUser) navigate('/');
	}, [currentUser]);

	return (
		<ContainerProfile>
			<p>
				{' '}
				¿seguro que quieres cerrar seseión <br /> en {currentUser.email}?
			</p>
			<div>
				<button onClick={() => handleSignOut(navigate)}>cerrar sesion</button>
			</div>
		</ContainerProfile>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Profile;
