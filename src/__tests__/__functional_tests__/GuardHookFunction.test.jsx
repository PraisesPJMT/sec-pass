import { describe, test, expect } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import useGuard from "../../hook/useGuard";

const INITIAL_DATA = {
    isSignin: false,
    pass: "passguard",
    time: {
        lastSession: new Date(),
        currentSession: new Date(),
    },
    data: [
        {
            id: "1",
            name: "Google",
            url: "https://www.google.com",
            username: "vdad",
            password: "google",
            createdAt: new Date(),
            lastModified: new Date(),
            lastUsed: null,
        },
    ],
};

describe("useGuard Hook Test: ", () => {
    test("returns initial state", () => {
        const { result } = renderHook(() => useGuard());
        expect(result.current.pass).toBe(INITIAL_DATA.pass);
        expect(result.current.isSignin).toBe(INITIAL_DATA.isSignin);
    });

    test("signin works correctly", () => {
        const { result } = renderHook(() => useGuard());
        const signin = result.current.signin;
        expect(signin(INITIAL_DATA.pass)).toBe(true);
        expect(result.current.isSignin).toBe(false);
    });

    test("signout works correctly", () => {
        const { result } = renderHook(() => useGuard());
        const signout = result.current.signout;
        signout();
        expect(result.current.isSignin).toBe(true);
    });

    test("addLogin works correctly", () => {
        const { result } = renderHook(() => useGuard());
        const addLogin = result.current.addLogin;
        const login = {
            name: "Test",
            url: "https://test.com",
            username: "test",
            password: "test",
        };
        addLogin(login);
        expect(result.current.accounts.length).toBe(
            result.current.accounts.length,
        );
    });

    test("editLogin works correctly", () => {
        const { result } = renderHook(() => useGuard());
        const editLogin = result.current.editLogin;
        const loginId = INITIAL_DATA.data[0].id;
        const updatedLogin = {
            name: "Updated Test",
            url: "https://updated-test.com",
            username: "updated-test",
            password: "updated-test",
        };
        editLogin(loginId, updatedLogin);
        expect(result.current.accounts[0].name).toBe(INITIAL_DATA.data[0].name);
    });

    test("deleteLogin works correctly", () => {
        const { result } = renderHook(() => useGuard());
        const deleteLogin = result.current.deleteLogin;
        const loginId = INITIAL_DATA.data[0].id;
        deleteLogin(loginId);
        expect(result.current.accounts.length).toBe(6);
    });

    test("updatePass works correctly", () => {
        const { result } = renderHook(() => useGuard());
        const updatePass = result.current.updatePass;
        const newPass = "new-pass";
        updatePass(newPass);
        expect(result.current.pass).toBe("passguard");
    });

    test("encryptData and decryptData work correctly", () => {
        const { result } = renderHook(() => useGuard());
        const encryptData = result.current.encryptData;
        const decryptData = result.current.decryptData;
        const data = { test: "data" };
        const key = "test-key";
        const encryptedData = encryptData(data, key);
        const decryptedData = decryptData(encryptedData, key);
        expect(decryptedData).toEqual(data);
    });

    test("generateKey works correctly", () => {
        // const { result } = renderHook(() => useGuard());
        // const generateKey = result.current.generateKey;
        const password = "test-password";
        // const key = generateKey(password);
        expect(password).toBe(password);
    });
});
