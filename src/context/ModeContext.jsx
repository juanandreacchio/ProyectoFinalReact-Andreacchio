import { createContext, useContext, useState } from "react";


export const ModeContext = createContext();

export const ModeProvider = ({ children }) =>{

    const [mode, setMode] = useState('light')

    const switchMode = () =>{
        mode === 'light' && setMode('dark');
        mode === 'dark' && setMode('light');
    }

    return(
        <ModeContext.Provider value={{ mode, switchMode }}>
            {children}
        </ModeContext.Provider>
    )
}

export const useMode = () =>{
    return useContext(ModeContext)
}