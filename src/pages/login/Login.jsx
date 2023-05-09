import { useContext, useEffect, useState } from 'react';
import { ContainerLogin, StyledLabel, StyledLogin } from './styles';
import { auth } from '../../config/firebase.config';
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';

const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: ''
	});
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		if (currentUser) navigate('/');
	}, [currentUser]);
	return (
		<ContainerLogin>
			<h1>Login</h1>
			<StyledLogin onSubmit={e => handleSubmit(e, loginInfo, navigate)}>
				<div>
					<StyledLabel htmlFor=''>email</StyledLabel>
					<input
						type='text'
						onChange={e =>
							setLoginInfo({
								...loginInfo,
								email: e.target.value
							})
						}
					/>
				</div>
				<div>
					<StyledLabel htmlFor=''>password</StyledLabel>
					<input
						type='text'
						onChange={e =>
							setLoginInfo({
								...loginInfo,
								password: e.target.value
							})
						}
					/>
				</div>
				<div>
					<button>sign in</button>
				</div>
				<div>
					<button onClick={loginWithGoogle}>sign in with Google</button>
				</div>
				<div>
					<button onClick={loginWithGitHub}>sign in with GitHub</button>
				</div>
			</StyledLogin>
		</ContainerLogin>
	);
};
const handleSubmit = async (e, loginInfo, navigate) => {
	e.preventDefault();

	const { email, password } = loginInfo;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};

const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (err) {
		console.log(err);
	}
};
const loginWithGitHub = async () => {
	const provider = new GithubAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GithubAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (err) {
		console.log(err);
	}
};
export default Login;
