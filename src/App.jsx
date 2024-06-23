import { createBrowserRouter } from 'react-router-dom';

import Landing from './screens/landing/Landing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing />,
	},
]);

export default router;
