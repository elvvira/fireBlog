import { deleteDoc, doc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';
import { AcceptButton, CloseDelete, ContainerDelete } from './styles';

const DeleteModal = ({ setShowDelete, id }) => {
	return (
		<ContainerDelete>
			<CloseDelete onClick={() => setShowDelete(null)}>x</CloseDelete>
			<p>¿Seguro que quieres eliminar este post?</p>
			<AcceptButton onClick={() => deletePost(id, setShowDelete)}>
				si
			</AcceptButton>
		</ContainerDelete>
	);
};

const deletePost = async (id, setShowDelete) => {
	try {
		const postToDelete = doc(blogCollectionReference, id);
		await deleteDoc(postToDelete);
		setShowDelete(null);
	} catch (err) {
		console.log(err);
	}
};
export default DeleteModal;
