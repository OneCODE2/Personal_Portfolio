import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");

  return {
    ...actual,
    useReducedMotion: () => true,
  };
});

import { ThemeProvider } from "../ThemeContext";
import ThemeBulbToggle from "../../Components/ThemeBulbToggle/ThemeBulbToggle";

describe("reduced motion", () => {
  it("switches theme immediately without waiting", async () => {
    render(
      <ThemeProvider>
        <ThemeBulbToggle />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: /switch to dark mode/i }));

    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    });
  });
});
