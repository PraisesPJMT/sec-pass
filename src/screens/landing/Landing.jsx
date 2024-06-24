import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/Logo';
import SettingsRing from '../../assets/SettingsRing';

import './Landing.css';

const Landing = () => {
	const navigate = useNavigate();

	return (
		<main id='landing'>
			<div id='logo'>
				<SettingsRing className='ring' />
				<Logo className='logo' />
			</div>
			<h1>
				Pass<span>Guard</span>
			</h1>

			<button
				type='button'
				className='primary-btn'
				onClick={() => navigate('/signin')}
			>
				ACCOUNT SIGNIN
			</button>
		</main>
	);
};

export default Landing;
