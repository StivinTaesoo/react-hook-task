import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
