import { useState, useRef } from 'react';
import Key from '../assets/svgs/Key';
import Show from '../assets/svgs/Show';
import Hide from '../assets/svgs/Hide';

const PasswordItem = ({
	label = '',
	value = '',
	name = '',
	handleChange = () => {},
	staticType = false,
	autoFocus = false,
	pass = '',
}) => {
	const [show, setShow] = useState(false);
	const inputRef = useRef();
	return (
		<>
			<div className='icon'>
				<Key />
			</div>
			<div className='desc'>
				<p className='label'>{label}</p>
				{!staticType ? (
					<p className='det'>{show ? pass : '*************'}</p>
				) : (
					<>
						<input
							ref={inputRef}
							type={show ? 'text' : 'password'}
							value={value}
							name={name}
							onChange={handleChange}
							autoFocus={autoFocus}
						/>
					</>
				)}
				<button
					type='button'
					className='secondary-btn'
					onClick={() => {
						inputRef?.current?.focus();
						setShow(!show);
					}}
				>
					{!show ? <Show /> : <Hide />}
				</button>
			</div>
		</>
	);
};

export default PasswordItem;
