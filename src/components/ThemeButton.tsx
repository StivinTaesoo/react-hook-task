import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <div
                className={
                    theme === "light"
                        ? "theme-toggle-container theme-toggle-container-light"
                        : "theme-toggle-container theme-toggle-container-dark"
                }
            >
                <div
                    className={
                        theme === "light"
                            ? "theme-toggle-circle theme-toggle-right"
                            : "theme-toggle-circle theme-toggle-left"
                    }
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </div>
            </div>
        </button>
    );
}
