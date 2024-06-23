import Logo from '../../assets/Logo';
import SettingsRing from '../../assets/SettingsRing';
import './Landing.css';

const Landing = () => {
	return (
		<main id='landing'>
			<div id='logo'>
				<SettingsRing className='ring' />
				<Logo className='logo' />
			</div>
			<h1>
				Pass<span>Guard</span>
			</h1>

			<button type='button' className='primary-btn'>
				ACCOUNT SIGNIN
			</button>
		</main>
	);
};

export default Landing;
