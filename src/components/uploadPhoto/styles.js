import styled from 'styled-components';
const ContainerUploadPhoto = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	margin-right: auto;
	margin-left: auto;
`;
const StyledForm = styled.form`
	display: flex;
	width: 300px;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	text-align: center;
`;
const ImgPost = styled.img`
	width: 250px;
	height: 180px;
	border-radius: 1rem;
	border: 1px solid black;
`;
export { ImgPost, ContainerUploadPhoto, StyledForm };
