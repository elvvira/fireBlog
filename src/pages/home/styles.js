import styled from 'styled-components';

const ContainerHome = styled.div`
	text-align: center;
	padding: 2rem;
`;
const FlexPosts = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
`;
const ContainerPost = styled.div`
	background-color: white;
	border: 1px solid black;
	border-radius: 1rem;
	padding: 1rem;
	text-align: center;
	width: 230px;
	height: 300px;
	position: relative;
`;
const PostImg = styled.img`
	width: 80%;
	height: 120px;
	border: 1px solid black;
	background-color: gray;
	border-radius: 1rem;
`;
const ButtonDeletePost = styled.button`
	position: absolute;
	bottom: 0.8rem;
	right: 20px;
	border: transparent;
`;
const ButtonEditPost = styled.button`
	position: absolute;
	bottom: 0.8rem;
	right: 50px;
`;
const DeleteImg = styled.img`
	width: 15px;
`;

export {
	ContainerHome,
	PostImg,
	ContainerPost,
	FlexPosts,
	ButtonDeletePost,
	DeleteImg,
	ButtonEditPost
};
