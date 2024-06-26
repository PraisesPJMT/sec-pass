import { createBrowserRouter } from 'react-router-dom';

import Signin from './screens/login/Signin';
import Landing from './screens/landing/Landing';
import Dashboard from './screens/dashboard/Dashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: 'signin',
		element: <Signin />,
	},
	{
		path: 'start',
		element: <Landing />,
	},
]);

export default router;
