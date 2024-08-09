import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import Add from "../../assets/svgs/Add";
import Close from "../../assets/svgs/Close";
import Created from "../../assets/svgs/Created";
import Delete from "../../assets/svgs/Delete";
import Download from "../../assets/svgs/Download";
import Edit from "../../assets/svgs/Edit";
import Hide from "../../assets/svgs/Hide";
import Show from "../../assets/svgs/Show";
import Key from "../../assets/svgs/Key";
import Logo from "../../assets/svgs/Logo";
import Menu from "../../assets/svgs/Menu";
import Modified from "../../assets/svgs/Modified";
import Search from "../../assets/svgs/Search";
import SettingsRing from "../../assets/svgs/SettingsRing";
import Thick from "../../assets/svgs/Thick";
import Used from "../../assets/svgs/Used";
import User from "../../assets/svgs/User";
import Web from "../../assets/svgs/Web";

describe("Svg Component Test: ", () => {
    test("Renders Add svg element correctly", () => {
        const { getByTestId } = render(<Add data-testid="add-svg" />);
        expect(getByTestId("add-svg")).toBeInstanceOf(SVGSVGElement);
    });

    test("Renders Close svg element correctly", () => {
        const { getByTestId } = render(<Close data-testid="close-svg" />);
        expect(getByTestId("close-svg")).toBeInstanceOf(SVGSVGElement);
    });

    test("Renders Created svg element correctly", () => {
        const { getByTestId } = render(<Created data-testid="created-svg" />);
        expect(getByTestId("created-svg")).toBeInTheDocument();
    });

    test("Renders Delete svg element correctly", () => {
        const { getByTestId } = render(<Delete data-testid="delete-svg" />);
        expect(getByTestId("delete-svg")).toBeInTheDocument();
    });

    test("Renders Download svg element correctly", () => {
        const { getByTestId } = render(<Download data-testid="download-svg" />);
        expect(getByTestId("download-svg")).toBeInTheDocument();
    });

    test("Renders Edit svg element correctly", () => {
        const { getByTestId } = render(<Edit data-testid="edit-svg" />);
        expect(getByTestId("edit-svg")).toBeInTheDocument();
    });

    test("Renders Hide svg element correctly", () => {
        const { getByTestId } = render(<Hide data-testid="hide-svg" />);
        expect(getByTestId("hide-svg")).toBeInTheDocument();
    });

    test("Renders Show svg element correctly", () => {
        const { getByTestId } = render(<Show data-testid="show-svg" />);
        expect(getByTestId("show-svg")).toBeInTheDocument();
    });

    test("Renders Key svg element correctly", () => {
        const { getByTestId } = render(<Key data-testid="key-svg" />);
        expect(getByTestId("key-svg")).toBeInTheDocument();
    });

    test("Renders Logo svg element correctly", () => {
        const { getByTestId } = render(<Logo data-testid="logo-svg" />);
        expect(getByTestId("logo-svg")).toBeInTheDocument();
    });

    test("Renders Menu svg element correctly", () => {
        const { getByTestId } = render(<Menu data-testid="menu-svg" />);
        expect(getByTestId("menu-svg")).toBeInTheDocument();
    });

    test("Renders Modified svg element correctly", () => {
        const { getByTestId } = render(<Modified data-testid="modified-svg" />);
        expect(getByTestId("modified-svg")).toBeInTheDocument();
    });

    test("Renders Search svg element correctly", () => {
        const { getByTestId } = render(<Search data-testid="search-svg" />);
        expect(getByTestId("search-svg")).toBeInTheDocument();
    });

    test("Renders SettingsRing svg element correctly", () => {
        const { getByTestId } = render(
            <SettingsRing data-testid="settings-ring-svg" />,
        );
        expect(getByTestId("settings-ring-svg")).toBeInTheDocument();
    });

    test("Renders Thick svg element correctly", () => {
        const { getByTestId } = render(<Thick data-testid="thick-svg" />);
        expect(getByTestId("thick-svg")).toBeInTheDocument();
    });

    test("Renders Used svg element correctly", () => {
        const { getByTestId } = render(<Used data-testid="used-svg" />);
        expect(getByTestId("used-svg")).toBeInTheDocument();
    });

    test("Renders User svg element correctly", () => {
        const { getByTestId } = render(<User data-testid="user-svg" />);
        expect(getByTestId("user-svg")).toBeInTheDocument();
    });

    test("Renders Web svg element correctly", () => {
        const { getByTestId } = render(<Web data-testid="web-svg" />);
        expect(getByTestId("web-svg")).toBeInTheDocument();
    });
});
