import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import Menu from '../assets/Menu';
import Close from '../assets/Close';
import Search from '../assets/Search';
import useGuard from '../hook/useGuard';
import Download from '../assets/Download';
import SettingsRing from '../assets/SettingsRing';

import './Header.css';

const Header = () => {
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
		<div className='header'>
			<button
				type='button'
				aria-label='Menu Button'
				onClick={() => setOpen(!open)}
				ref={menuBtnRef}
			>
				<Menu />
			</button>

			<div className={`menu ${open ? 'open' : ''}`} ref={menuRef}>
				<button type='button'>
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
		</div>
	);
};

export default Header;
