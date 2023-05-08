import { HeaderContainer, Menu, StyledLink } from './styles';

const Header = () => {
	return (
		<HeaderContainer>
			<nav>
				<Menu>
					<li>
						<StyledLink to='/'>Home</StyledLink>
					</li>
					<li>
						<StyledLink to='Login'>Login</StyledLink>
					</li>
					<li>
						<StyledLink to='Register'>Register</StyledLink>
					</li>
				</Menu>
			</nav>
		</HeaderContainer>
	);
};
export default Header;
