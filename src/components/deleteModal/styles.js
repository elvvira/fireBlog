import styled from 'styled-components';

const ContainerDelete = styled.div`
	position: fixed;
	background-color: red;
	border: 1px solid black;
	border-radius: 1rem;
	width: 500px;
	padding: 1rem;
	top: 15rem;
	left: 50%;
	transform: translateX(-50%);
	color: yellow;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
`;
const CloseDelete = styled.button`
	border-radius: 100%;
	width: 30px;
	position: relative;
	right: -40%;
`;
const AcceptButton = styled.button`
	background-color: white;
	width: 50px;
`;
export { ContainerDelete, CloseDelete, AcceptButton };
