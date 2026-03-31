import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    return savedTheme === "dark" ? "dark" : "light";
  });
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setThemeMode = useCallback((nextTheme) => {
    setTheme(nextTheme === "dark" ? "dark" : "light");
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      setThemeMode,
      soundEnabled,
      setSoundEnabled,
    }),
    [theme, setThemeMode, soundEnabled],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
