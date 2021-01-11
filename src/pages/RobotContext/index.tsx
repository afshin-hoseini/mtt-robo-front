import { createContext, FC } from 'react';

export const RobotContext = createContext({});

export const RobotProvider : FC= ({children})=>{

    
    return (
        <RobotContext.Provider value={{}}>
            {children}
        </RobotContext.Provider>
    )
}