import { useState } from 'react';
import { EditContainer, StyledForm, StyledInput } from './styles';
import { doc, updateDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';

const EditModal = ({ setShowEdit, titulo, texto, id }) => {
	const [editInfo, setEditInfo] = useState({
		titulo: titulo,
		texto: texto
	});

	return (
		<EditContainer>
			<button onClick={() => setShowEdit(null)}>x</button>
			<StyledForm action=''>
				<div>
					<label htmlFor=''>titulo</label>
					<StyledInput
						type='text'
						name=''
						id=''
						value={editInfo.titulo}
						onChange={e =>
							setEditInfo({
								...editInfo,
								titulo: e.target.value
							})
						}
					/>
				</div>
				<div>
					<label htmlFor=''>texto</label>
					<StyledInput
						type='text'
						name=''
						id=''
						value={editInfo.texto}
						onChange={e =>
							setEditInfo({
								...editInfo,
								texto: e.target.value
							})
						}
					/>
				</div>
				<button onClick={e => editPost(e, id, setShowEdit, editInfo)}>
					Subir
				</button>
			</StyledForm>
		</EditContainer>
	);
};

const editPost = async (e, id, setShowEdit, editInfo) => {
	e.preventDefault();
	try {
		const postToUpdate = doc(blogCollectionReference, id);
		await updateDoc(postToUpdate, editInfo);
		setShowEdit(null);
	} catch (err) {
		console.log(err);
	}
};
export default EditModal;
