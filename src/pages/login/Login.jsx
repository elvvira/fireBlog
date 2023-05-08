import { useState } from 'react';
import { ContainerLogin, StyledLabel, StyledLogin } from './styles';

const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: ''
	});
	return (
		<ContainerLogin>
			<h1>Login</h1>
			<StyledLogin onSubmit={handleSubmit}>
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
			</StyledLogin>
		</ContainerLogin>
	);
};
const handleSubmit = e => {
	e.preventdDefoult();
};

export default Login;
