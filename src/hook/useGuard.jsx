import { useState } from 'react';

const useGuard = () => {
	const [account, setAccount] = useState({
		isSignin: false,
		pass: 'passguard',
		data: [],
	});

	const signin = (pass) => {
		if (pass === account.pass) {
			setAccount((prev) => ({ ...prev, isSignin: true }));
			return true;
		}

		return false;
	};

	const signout = () => {
		setAccount((prev) => ({ ...prev, isSignin: false }));
		return true;
	};

	return { isSignin: account.isSignin, signin, signout };
};

export default useGuard;
