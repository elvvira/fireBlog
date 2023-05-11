import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes
} from 'firebase/storage';
import { storage } from '../../config/firebase.config';
import { v4 } from 'uuid';
import { useState } from 'react';
import { ContainerUploadPhoto, ImgPost, StyledForm } from './styles';

const UploadPhoto = ({ newPostInfo, setNewPostInfo }) => {
	const [photo, setPhoto] = useState('');
	return (
		<ContainerUploadPhoto>
			<StyledForm>
				<input
					type='file'
					onChange={e =>
						handleLoadFile(
							e.target.files[0],
							setPhoto,
							newPostInfo,
							setNewPostInfo
						)
					}
				/>
				<div>
					<ImgPost src={photo || 'public/images/noPhoto.png'} alt='' />
				</div>
			</StyledForm>
			<div>
				<button onClick={() => deleteImg(photo, setPhoto)}>borrar foto</button>
			</div>
		</ContainerUploadPhoto>
	);
};
const handleLoadFile = async (file, setPhoto, newPostInfo, setNewPostInfo) => {
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	console.log(nameNoExtension);
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		console.log(upload);
		console.log(imageURL);
		setPhoto(imageURL);
		setNewPostInfo({
			...newPostInfo,
			img: imageURL
		});
	} catch (err) {
		console.log(err);
	}
};

const deleteImg = async (photo, setPhoto) => {
	const storageRef = ref(storage, photo);
	try {
		await deleteObject(storageRef);
		console.log('foto eliminada');
		setPhoto('');
	} catch (err) {
		console.log(err);
	}
};
export default UploadPhoto;
