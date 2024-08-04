import { useNavigate } from 'react-router-dom';

import Logo from '../assets/svgs/Logo';
import SettingsRing from '../assets/svgs/SettingsRing';
import { formatDateToCustomString } from '../utils/helpers';
import Created from '../assets/svgs/Created';
import Modified from '../assets/svgs/Modified';
import useGuard from '../hook/useGuard';

const Session = () => {
	const navigate = useNavigate();

	const { signout } = useGuard();

	return (
		<main className='wrap'>
			<div className='wrap-logo'>
				<SettingsRing className='ring' />
				<Logo className='logo' />
			</div>
			<h1>
				Pass<span>Guard</span>
			</h1>

			<div className='sec col'>
				<div className='sub-sec'>
					<div className='icon'>
						<Modified />
					</div>
					<div className='desc'>
						<p className='label'>Last session close</p>
						<p className='det'>
							{formatDateToCustomString(new Date())}
						</p>
					</div>
				</div>
				<hr />
				<div className='sub-sec'>
					<div className='icon'>
						<Created />
					</div>
					<div className='desc'>
						<p className='label'>Current session start</p>
						<p className='det'>
							{formatDateToCustomString(new Date())}
						</p>
					</div>
				</div>
			</div>

			<button
				type='button'
				className='primary-btn'
				onClick={() => {
					signout();
					navigate('/signin');
				}}
			>
				SIGNOUT
			</button>
		</main>
	);
};

export default Session;
