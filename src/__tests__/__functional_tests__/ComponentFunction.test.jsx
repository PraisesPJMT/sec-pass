import { render } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AddLogin from "../../components/AddLogin";

import DashboardHeader from "../../components/DashboardHeader";
import DeleteLogin from "../../components/DeleteLogin";
import EditLogin from "../../components/EditLogin";
import InputItem from "../../components/InputItem";
import PasswordItem from "../../components/PasswordItem";
import PinSettings from "../../components/PinSettings";
import Session from "../../components/Session";
import SettingsHeader from "../../components/SettingsHeader";

describe("Component Functional Tests: ", () => {
    test("AddLogin functions correctly", () => {
        const setOpen = vi.fn();
        const handleUpdate = vi.fn();

        const { getByText } = render(
            <MemoryRouter>
                <AddLogin
                    open={true}
                    setOpen={setOpen}
                    handleUpdate={handleUpdate}
                />
            </MemoryRouter>,
        );
        expect(getByText("Add Account")).toBeInTheDocument();
    });

    test("DashboardHeader functions correctly", () => {
        const handleAdd = vi.fn();
        const { getByText } = render(
            <MemoryRouter>
                <DashboardHeader handleAdd={handleAdd} />
            </MemoryRouter>,
        );
        expect(getByText("Dashboard")).toBeInTheDocument();
    });

    test("DeleteLogin functions correctly", () => {
        const login = { id: 1, name: "Test Login" };
        const handleUpdate = vi.fn();
        const setOpen = vi.fn();
        const { getByText } = render(
            <MemoryRouter>
                <DeleteLogin
                    login={login}
                    open={true}
                    setOpen={setOpen}
                    handleUpdate={handleUpdate}
                />
            </MemoryRouter>,
        );
        expect(getByText("Delete Account")).toBeInTheDocument();
    });

    test("EditLogin functions correctly", () => {
        const login = {
            id: 1,
            name: "Test Login",
            username: "test",
            password: "password",
            url: "https://test.com",
        };
        const handleUpdate = vi.fn();
        const setOpen = vi.fn();
        const { getByText } = render(
            <MemoryRouter>
                <EditLogin
                    login={login}
                    open={true}
                    setOpen={setOpen}
                    handleUpdate={handleUpdate}
                />
            </MemoryRouter>,
        );
        expect(getByText("Edit Account")).toBeInTheDocument();
    });

    test("InputItem functions correctly", () => {
        const { getByLabelText } = render(
            <MemoryRouter>
                <InputItem label="Test Label" name="test" />
            </MemoryRouter>,
        );
        expect(getByLabelText("Test Label")).toBeInTheDocument();
    });

    test("PasswordItem functions correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <PasswordItem label="Test Label" name="test" />
            </MemoryRouter>,
        );
        expect(getByText("Test Label")).toBeInTheDocument();
    });

    test("PinSettings functions correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <PinSettings />
            </MemoryRouter>,
        );
        expect(getByText("Guard")).toBeInTheDocument();
    });

    test("Session functions correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Session />
            </MemoryRouter>,
        );
        expect(getByText("Pass")).toBeInTheDocument();
    });

    test("SettingsHeader functions correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <SettingsHeader />
            </MemoryRouter>,
        );
        expect(getByText("PassGuard - Settings")).toBeInTheDocument();
    });
});
