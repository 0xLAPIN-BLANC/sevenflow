import {createContext, useState, useContext, useEffect} from "react";
import {lightTheme, darkTheme} from "./Themes";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [is_dark, set_is_dark] = useState(false);

    const toggle_theme = () => {
        set_is_dark(!is_dark);
    }

    const theme = is_dark ? darkTheme : lightTheme;

    useEffect(() => {
        const root = document.documentElement;
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, is_dark, toggle_theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}