import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { auth } from '../config/firebase.config';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('usuario autenticado', user);
				setCurrentUser(user);
			} else {
				console.log('usuario no autenticado');
				setCurrentUser(null);
			}
		});
		return () => unsuscribe;
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
