import { v4 as uuidv4 } from "uuid";
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
        if (account.pass && pass === account.pass) {
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
                    return {
                        id: loginId,
                        name: login.name,
                        url: login.url,
                        username: login.username,
                        password: login.password,
                        createdAt: data.createdAt,
                        lastUsed: data.lastUsed,
                        lastModified: new Date(),
                    };
                }
                return data;
            }),
        };

        storeData();
    };

    const addLogin = (login) => {
        account = {
            ...account,
            data: [
                ...account.data,
                {
                    id: uuidv4(),
                    name: login.name,
                    url: login.url,
                    username: login.username,
                    password: login.password,
                    createdAt: new Date(),
                    lastModified: new Date(),
                    lastUsed: null,
                },
            ],
        };

        storeData();
    };

    return {
        signin,
        signout,
        addLogin,
        editLogin,
        updatePass,
        deleteLogin,
        pass: account.pass,
        time: account.time,
        accounts: account.data,
        isSignin: account.isSignin,
    };
};

export default useGuard;
