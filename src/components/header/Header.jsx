import { useContext } from 'react';
import { HeaderContainer, Menu, StyledEmail, StyledLink } from './styles';
import { AuthContext } from '../../contexts/Auth.context';

const Header = () => {
	const { currentUser } = useContext(AuthContext);
 
	return (
		<HeaderContainer>
			<StyledEmail>{currentUser && currentUser.email}</StyledEmail>

			<nav>
				<Menu>
					<li>
						<StyledLink to='/'>Home</StyledLink>
					</li>

					{currentUser ? (
						<li>
							<StyledLink to='NewPost'>New Post</StyledLink>
						</li>
					) : (
						<li>
							<StyledLink to='Login'>Login</StyledLink>
						</li>
					)}
					{currentUser ? (
						<li>
							<StyledLink to='Profile'>Profile</StyledLink>
						</li>
					) : (
						<li>
							<StyledLink to='Register'>Register</StyledLink>
						</li>
					)}
				</Menu>
			</nav>
		</HeaderContainer>
	);
};
export default Header;
