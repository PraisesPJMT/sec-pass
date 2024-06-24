import { createBrowserRouter } from 'react-router-dom';

import Signin from './screens/login/Signin';
import Landing from './screens/landing/Landing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
	},
	{
		path: 'signin',
		element: <Signin />,
	},
]);

export default router;
