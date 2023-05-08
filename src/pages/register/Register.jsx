import { useState } from 'react';
import { ContainerRegister, StyledLabel, StyledRegister } from './styles';
import { auth } from '../../config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
	const [registerInfo, setRegisterInfo] = useState({
		email: '',
		password: '',
		confrimPassword: ''
	});
	return (
		<ContainerRegister>
			<h1>Register</h1>
			<StyledRegister onSubmit={() => handleSubmit(e, registerInfo)}>
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
};
export default Register;
