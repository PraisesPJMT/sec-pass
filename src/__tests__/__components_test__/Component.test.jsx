import { render } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Signin from "../../screens/Signin";
import Landing from "../../screens/Landing";
import Settings from "../../screens/Settings";
import Dashboard from "../../screens/Dashboard";

describe("Component Test: ", () => {
    test("Renders Landing screen correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Landing />
            </MemoryRouter>,
        );
        expect(getByText("Pass")).toBeInTheDocument();
    });

    test("Renders Dashboard screen correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>,
        );
        expect(getByText("Edit")).toBeInTheDocument();
    });

    test("Renders Settings screen correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Settings />
            </MemoryRouter>,
        );
        expect(getByText("PassGuard Session")).toBeInTheDocument();
    });

    test("Renders Signin screen correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Signin />
            </MemoryRouter>,
        );
        expect(getByText("Guard")).toBeInTheDocument();
    });
});
