import { useEffect, useState } from 'react';
import { formatDateToCustomString } from '../../utils/helpers';

import Key from '../../assets/Key';
import Web from '../../assets/Web';
import User from '../../assets/User';
import Edit from '../../assets/Edit';
import Show from '../../assets/Show';
import Hide from '../../assets/Hide';
import Used from '../../assets/Used';
import Delete from '../../assets/Delete';
import Created from '../../assets/Created';
import useGuard from '../../hook/useGuard';
import Header from '../../components/Header';
import Modified from '../../assets/Modified';

import './Dashboard.css';

const Dashboard = () => {
	const { accounts } = useGuard();
	const [data, setData] = useState([...accounts]);
	const [show, setShow] = useState(false);

	const [login, setLogin] = useState(data[0]);

	const handleEdit = () => {};

	const handleDelete = () => {};

	useEffect(() => {
		setData([...accounts]);
	}, [accounts]);

	return (
		<div id='dashboard'>
			<Header />

			<div className='main'>
				<aside>
					{data.map((account) => (
						<button
							key={account.password}
							className={`account ${
								account.password === login.password ? 'active' : ''
							}`}
							type='button'
							onClick={() => setLogin(account)}
						>
							<div className='logo'>
								<User />
							</div>
							<div className='details'>
								<span className='title'>{account.name}</span>
								<span>{account.url}</span>
							</div>
						</button>
					))}
				</aside>
				<main>
					<div className='header'>
						<h2>{login.url}</h2>
						<button
							type='button'
							className='secondary-btn'
							onClick={handleEdit}
						>
							<Edit />
							Edit
						</button>
						<button
							type='button'
							className='secondary-btn'
							onClick={handleDelete}
						>
							<Delete />
							Delete
						</button>
					</div>
					<div className='body'>
						<div className='sec'>
							<div className='icon'>
								<User />
							</div>
							<div className='desc'>
								<p className='label'>Username</p>
								<p className='det'>{login.username}</p>
							</div>
						</div>

						<div className='sec'>
							<div className='icon'>
								<Key />
							</div>
							<div className='desc'>
								<p className='label'>Password</p>
								<p className='det'>{show ? login.password : '*************'}</p>
								<button
									type='button'
									className='secondary-btn'
									onClick={() => setShow(!show)}
								>
									{!show ? <Show /> : <Hide />}
								</button>
							</div>
						</div>

						<div className='sec'>
							<div className='icon'>
								<Web />
							</div>
							<div className='desc'>
								<p className='label'>Websit</p>
								<p className='det'>{login.url}</p>
							</div>
						</div>

						<div className='sec col'>
							<div className='sub-sec'>
								<div className='icon'>
									<Used />
								</div>
								<div className='desc'>
									<p className='label'>Last autofilled</p>
									<p className='det'>
										{login.lastUsed
											? formatDateToCustomString(login.lastUsed)
											: 'Never'}
									</p>
								</div>
							</div>
							<hr />
							<div className='sub-sec'>
								<div className='icon'>
									<Modified />
								</div>
								<div className='desc'>
									<p className='label'>Last modified</p>
									<p className='det'>
										{formatDateToCustomString(login.lastModified)}
									</p>
								</div>
							</div>
							<hr />
							<div className='sub-sec'>
								<div className='icon'>
									<Created />
								</div>
								<div className='desc'>
									<p className='label'>Created</p>
									<p className='det'>
										{formatDateToCustomString(login.createdAt)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
