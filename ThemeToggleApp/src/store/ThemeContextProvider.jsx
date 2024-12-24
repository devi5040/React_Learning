import { createContext } from "react";
import { useState } from "react";

// Todo: Create & manage context in this file
export const ThemeContext = createContext({
  theme: "",
  handleBtnClick: () => {},
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const contextValue = { theme: theme, handleBtnClick: handleThemeChange };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
