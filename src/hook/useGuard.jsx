import { INITIAL_DATA } from '../utils/constants';

const useGuard = () => {
	let account =
		JSON.parse(localStorage.getItem('PASS_GUARD')) || INITIAL_DATA;

	const storeData = () =>
		localStorage.setItem('PASS_GUARD', JSON.stringify(account));

	const updateLastSession = () => {
		account = {
			...account,
			time: { ...account.time, lastSession: new Date() },
		};

		storeData();
	};

	const updateCurrentSession = () => {
		account = {
			...account,
			time: { ...account.time, currentSession: new Date() },
		};

		storeData();
	};

	const updatePass = (newPass) => {
		account = { ...account, pass: newPass };
		storeData();
	};

	const signin = (pass) => {
		if (pass === account.pass) {
			account = { ...account, isSignin: true };
			updateCurrentSession();
			storeData();
			return true;
		}

		return false;
	};

	const signout = () => {
		account = { ...account, isSignin: false };
		updateLastSession();
		storeData();
		return true;
	};

	return {
		isSignin: account.isSignin,
		accounts: account.data,
		pass: account.pass,
		time: account.time,
		signin,
		signout,
		updatePass,
	};
};

export default useGuard;
