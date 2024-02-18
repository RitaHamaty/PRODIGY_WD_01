import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const Theme = 'light';

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(localStorage.getItem(Theme));

    const toggleTheme = (theme) => {
        console.log(`from context ${theme}`)
        if ( theme === 'light') {
            setTheme('light') ;
            localStorage.setItem(Theme, 'light');
        } else {
            setTheme('dark');
            localStorage.setItem(Theme, 'dark');
        }
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useThemeContext = () => {
    return useContext(ThemeContext);
}