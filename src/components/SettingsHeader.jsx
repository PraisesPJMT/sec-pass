import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import Logo from '../assets/svgs/Logo';
import Menu from '../assets/svgs/Menu';
import useGuard from '../hook/useGuard';
import Download from '../assets/svgs/Download';
import SettingsRing from '../assets/svgs/SettingsRing';

import '../assets/styles/DashboardHeader.css';

const SettingsHeader = () => {
	const [open, setOpen] = useState(false);

	const menuRef = useRef(null);
	const menuBtnRef = useRef(null);

	const { isSignin, signout } = useGuard();

	const [access, setAccess] = useState(isSignin);

	const navigate = useNavigate();

	useEffect(() => {
		if (!access) navigate('/start');
	}, [access, navigate]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				!menuBtnRef.current.contains(event.target)
			) {
				setOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	return (
		<header className='header'>
			<button
				type='button'
				aria-label='Menu Button'
				onClick={() => setOpen(!open)}
				ref={menuBtnRef}
			>
				<Menu />
			</button>

			<div className={`menu ${open ? 'open' : ''}`} ref={menuRef}>
				<button
					type='button'
					onClick={() => {
						navigate('/');
						setOpen(false);
					}}
				>
					<Logo />
					Dashboard
				</button>
				<button
					type='button'
					onClick={() => {
						navigate('/settings');
						setOpen(false);
					}}
				>
					<SettingsRing />
					Settings
				</button>
				<button
					type='button'
					onClick={() => {
						signout();
						setAccess(false);
						navigate('/start');
					}}
					className='signout'
				>
					<Download />
					Signout
				</button>
			</div>

			<div className='title'>
				<h1>PassGuard - Settings</h1>
			</div>
		</header>
	);
};

export default SettingsHeader;
