"use client"

import React, { useState, createContext, useContext } from 'react'
import type { SectionName } from '@/lib/types'

type ActiveSectionContextProviderProp = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProp) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if(context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
    }

    return context;
}