import { INITIAL_DATA } from '../utils/constants';

const useGuard = () => {
	let account = JSON.parse(localStorage.getItem('PASS_GUARD')) || INITIAL_DATA;

	const storeData = () =>
		localStorage.setItem('PASS_GUARD', JSON.stringify(account));

	const signin = (pass) => {
		if (pass === account.pass) {
			account = { ...account, isSignin: true };
			storeData();
			return true;
		}

		return false;
	};

	const signout = () => {
		account = { ...account, isSignin: false };
		storeData();
		return true;
	};

	return {
		isSignin: account.isSignin,
		accounts: account.data,
		signin,
		signout,
	};
};

export default useGuard;
