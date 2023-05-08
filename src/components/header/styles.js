import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	width: 100%;
	background-color: yellow;
	display: flex;
	gap: 1rem;
	justify-content: flex-end;
	padding: 1rem;
`;

const Menu = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

const StyledLink = styled(NavLink)`
	color: black;
	font-weight: bold;
	&:hover {
		color: rebeccapurple;
	}

	&.active {
		color: gray;
	}
`;
export { HeaderContainer, Menu, StyledLink };
