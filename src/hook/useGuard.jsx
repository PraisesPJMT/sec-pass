import { INITIAL_DATA } from "../utils/constants";

const useGuard = () => {
    let account =
        JSON.parse(localStorage.getItem("PASS_GUARD")) || INITIAL_DATA;

    const storeData = () =>
        localStorage.setItem("PASS_GUARD", JSON.stringify(account));

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

    const deleteLogin = (loginId) => {
        account = {
            ...account,
            data: account.data.filter((login) => login.id !== loginId),
        };
        storeData();
    };

    const editLogin = (loginId, login) => {
        account = {
            ...account,
            data: account.data.map((data) => {
                if (data.id === loginId) {
                    return login;
                }
                return data;
            }),
        };
        storeData();
    };

    return {
        isSignin: account.isSignin,
        accounts: account.data,
        pass: account.pass,
        time: account.time,
        signin,
        signout,
        updatePass,
        deleteLogin,
        editLogin,
    };
};

export default useGuard;
