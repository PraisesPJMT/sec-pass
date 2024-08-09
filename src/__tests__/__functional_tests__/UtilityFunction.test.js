import { describe, test, expect } from "vitest";
import { formatDateToCustomString } from "../../utils/helpers.js";

describe("formatDateToCustomString Function Test: ", () => {
    test("formats date to custom string", () => {
        const date = "2024-08-08T14:30:00.000Z";
        const formattedDate = formatDateToCustomString(date);
        expect(formattedDate).toBe("08 Aug 2024, 15:30");
    });

    test("handles invalid date", () => {
        const date = "invalid-date";
        expect(() => formatDateToCustomString(date)).toThrowError();
    });

    test("handles undefined date", () => {
        const date = undefined;
        expect(() => formatDateToCustomString(date)).toThrowError();
    });
});
