import React, { useState, createContext, useContext, useEffect } from "react";
import { storage } from "../storage/storage";

export const ThemeContext = createContext({theme: 'light', changeTheme:(themeToChange: string) => {}})

interface Props {
    children: React.ReactNode
}

export const ThemeProvider =  ({ children }: Props) => {
    const [theme, setTheme] = useState(storage.getItem('theme')||'light');

    const changeTheme = (themeToChange: string) => {
        setTheme(themeToChange)
        storage.setItem('theme', themeToChange)
    }
    const properties = [
      '-color',
      '-background-component',
      '-background-day',
      '-background-body',
    ]
    useEffect(()=> {
      const root = document.querySelector(':root') as HTMLElement
      properties.forEach(property => {
        root.style.setProperty(`--default${property}`, `var(--${theme}${property})`)
      });
  
    },[theme])

    
    return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };