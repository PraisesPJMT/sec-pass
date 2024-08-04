import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import '../assets/styles/Settings.css';
import Key from '../assets/svgs/Key';
import User from '../assets/svgs/User';
import SettingsHeader from '../components/SettingsHeader';

const Settings = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const data = [
		{ name: 'PassGuard Pin', link: '/settings', icon: <Key /> },
		{
			name: 'PassGuard Session',
			link: '/settings/session',
			icon: <User />,
		},
	];

	return (
		<div id='settings'>
			<SettingsHeader />
			<aside>
				{data.map((setting) => (
					<button
						key={setting.name}
						className={`account ${
							setting.link === location.pathname ? 'active' : ''
						}`}
						type='button'
						onClick={() => {
							navigate(setting.link);
						}}
					>
						<div className='logo'>{setting.icon}</div>
						<div className='details'>
							<span className='title'>{setting.name}</span>
						</div>
					</button>
				))}
			</aside>
			<Outlet />
		</div>
	);
};

export default Settings;
