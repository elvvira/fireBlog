import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import NewPost from '../pages/newPost/NewPost';
import Profile from '../pages/profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import AllowedRoutes from './AllowedRoutes';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />}></Route>
				<Route path='/Register' element={<Register />}></Route>
				<Route
					path='/Login'
					element={
						<AllowedRoutes>
							<Login />
						</AllowedRoutes>
					}
				></Route>
				<Route path='/NewPost' element={<NewPost />}></Route>
				<Route
					path='/Profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				></Route>
			</Route>
		</Routes>
	);
};
export default Router;
