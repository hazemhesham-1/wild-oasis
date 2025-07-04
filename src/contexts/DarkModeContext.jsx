import { createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(window.matchMedia("(prefers-color-scheme: dark)").matches, "isDarkMode");

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        }
        else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    function toggleDarkMode() {
        setIsDarkMode(isDark => !isDark);
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if(context === undefined) {
        throw new Error("DarkModeContext was used outside of DarkModeProvider");
    }

    return context;
}

DarkModeProvider.propTypes = {
    children: PropTypes.any,
};

/* eslint-disable-next-line react-refresh/only-export-components */
export { useDarkMode };

export default DarkModeProvider;