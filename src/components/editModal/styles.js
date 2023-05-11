import styled from 'styled-components';

const EditContainer = styled.div`
	position: fixed;
	top: 15rem;
	left: 50%;
	transform: translateX(-50%);
	width: 80%;
	background-color: yellow;
	border: 1px solid black;
	border-radius: 1rem;
	padding: 1rem;
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
`;
const StyledInput = styled.input`
	width: 300px;
	height: 60px;
`;

export { EditContainer, StyledInput, StyledForm };
