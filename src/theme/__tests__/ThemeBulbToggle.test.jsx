import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import { ThemeProvider } from "../ThemeContext";
import ThemeBulbToggle from "../../Components/ThemeBulbToggle/ThemeBulbToggle";

function AppHarness() {
  return (
    <ThemeProvider>
      <ThemeBulbToggle />
    </ThemeProvider>
  );
}

describe("ThemeBulbToggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("loads light theme by default", () => {
    render(<AppHarness />);

    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(screen.getByRole("button", { name: /switch to dark mode/i })).toBeInTheDocument();
  });

  it("restores dark theme from localStorage", () => {
    window.localStorage.setItem("portfolio-theme", "dark");

    render(<AppHarness />);

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(screen.getByRole("button", { name: /switch to light mode/i })).toBeInTheDocument();
  });

  it("toggles theme and persists value", async () => {
    const user = userEvent.setup();
    render(<AppHarness />);

    await user.click(screen.getByRole("button", { name: /switch to dark mode/i }));

    await waitFor(() => expect(document.documentElement).toHaveAttribute("data-theme", "dark"), {
      timeout: 1500,
    });
    expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");
  });
});
