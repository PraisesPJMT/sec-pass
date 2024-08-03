import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/svgs/Logo';
import Show from '../assets/svgs/Show';
import Hide from '../assets/svgs/Hide';
import useGuard from '../hook/useGuard';
import SettingsRing from '../assets/svgs/SettingsRing';

import '../assets/styles/Signin.css';

const Login = () => {
	const [pass, setPass] = useState('');
	const [visible, setVisible] = useState(false);
	const [errMsg, setErrMsg] = useState('');

	const navigate = useNavigate();

	const { signin } = useGuard();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (pass.length > 0) {
			const status = signin(pass);

			console.log('Status: ', status);

			if (status) {
				setErrMsg('');
				navigate('/');
			} else {
				setErrMsg('Pass details provided is invalid!');
			}
		} else {
			setErrMsg('Account Pass is at least 8 characters long!');
		}
	};

	const handleChange = (event) => {
		setErrMsg('');
		const { value } = event.target;
		setPass(value);
	};

	return (
		<main id='landing'>
			<form id='signin-form' onSubmit={handleSubmit}>
				<h1>
					Pass<span>Guard</span>
				</h1>

				<div className='field'>
					<label htmlFor='guard-pass'>
						<span>PASS</span>
						<div>
							<input
								type={visible ? 'text' : 'password'}
								name='guard-pass'
								id='guard-pass'
								value={pass}
								onChange={handleChange}
								required
								autoFocus
							/>
							<button
								type='button'
								className=''
								aria-label='eye'
								onClick={() => setVisible(!visible)}
							>
								{visible ? <Show /> : <Hide />}
							</button>
						</div>
					</label>
					{errMsg && <p className='error-msg'>{errMsg}</p>}
				</div>

				<button type='submit' className='primary-btn'>
					SIGNIN ACCOUNT
				</button>

				<div id='logo'>
					<SettingsRing className='ring' />
					<Logo className='logo' />
				</div>
			</form>
		</main>
	);
};

export default Login;
