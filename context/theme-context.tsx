"use client"

import React, { useEffect, useState, createContext, useContext } from 'react'

type Theme = "light" | "dark"


type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContexType = {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContexType | null>(null)

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        if(theme === 'light') {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else {
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null

        if(localTheme) {
            setTheme(localTheme)

            if(localTheme === 'dark')
                document.documentElement.classList.add('dark')
            else
                document.documentElement.classList.remove('dark')
                
        } else if(window.matchMedia('prefers-color-scheme: dark').matches) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if(context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }

    return context;
}