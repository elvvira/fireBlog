import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.context';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ redirecTo = '/', children }) => {
	const { currentUser } = useContext(AuthContext);
	if (!currentUser) return <Navigate to={redirecTo} replace></Navigate>;
	return children;
};
export default ProtectedRoute;
