import { createBrowserRouter } from 'react-router-dom';

import Signin from './screens/Signin';
import Landing from './screens/Landing';
import Settings from './screens/Settings';
import Dashboard from './screens/Dashboard';
import Session from './components/Session';
import PinSettings from './components/PinSettings';

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
	{
		path: 'settings',
		element: <Settings />,
		children: [
			{
				path: '',
				element: <PinSettings />,
				index: true,
			},
			{
				path: 'session',
				element: <Session />,
			},
		],
	},
]);

export default router;
