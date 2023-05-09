import { useContext, useEffect, useState } from 'react';
import { ContainerRegister, StyledLabel, StyledRegister } from './styles';
import { auth } from '../../config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../contexts/Auth.context';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	const [registerInfo, setRegisterInfo] = useState({
		email: '',
		password: '',
		confrimPassword: ''
	});
	useEffect(() => {
		if (currentUser) navigate('/');
	}, [currentUser]);
	return (
		<ContainerRegister>
			<h1>Register</h1>
			<StyledRegister onSubmit={e => handleSubmit(e, registerInfo)}>
				<div>
					<StyledLabel htmlFor=''>email</StyledLabel>
					<input
						type='text'
						onChange={e =>
							setRegisterInfo({
								...registerInfo,
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
							setRegisterInfo({
								...registerInfo,
								password: e.target.value
							})
						}
					/>
				</div>
				<div>
					<StyledLabel htmlFor=''>confirm password</StyledLabel>
					<input
						type='text'
						onChange={e =>
							setRegisterInfo({
								...registerInfo,
								confrimPassword: e.target.value
							})
						}
					/>
				</div>
				<div>
					<button>sign in</button>
				</div>
			</StyledRegister>
		</ContainerRegister>
	);
};

const handleSubmit = async (e, registerInfo) => {
	e.preventDefault();
	const { email, password } = registerInfo;

	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};
export default Register;
