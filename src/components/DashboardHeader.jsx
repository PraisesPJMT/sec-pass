import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import Logo from '../assets/svgs/Logo';
import Menu from '../assets/svgs/Menu';
import useGuard from '../hook/useGuard';
import Close from '../assets/svgs/Close';
import Search from '../assets//svgs/Search';
import Download from '../assets/svgs/Download';
import SettingsRing from '../assets/svgs/SettingsRing';

import '../assets/styles/DashboardHeader.css';

const DashboardHeader = () => {
	const [passSearch, setPassSearch] = useState('');
	const [open, setOpen] = useState(false);
	const [searchFocus, setSearchFocus] = useState(false);

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

			<label htmlFor='pass-search' className={searchFocus ? 'focus' : ''}>
				<span>
					<Search />
				</span>

				<input
					type='text'
					id='pass-search'
					placeholder='Search'
					value={passSearch}
					onChange={(e) => setPassSearch(e.target.value)}
					onFocus={() => setSearchFocus(true)}
					onBlur={() => setSearchFocus(false)}
				/>
				<button
					type='button'
					aria-label='clear search'
					onClick={() => setPassSearch('')}
				>
					<Close />
				</button>
			</label>
		</header>
	);
};

export default DashboardHeader;
