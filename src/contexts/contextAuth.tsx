import { ReactNode, createContext, useEffect, useState } from "react";
 
type ContextType = {
    name: string;
    setName: (n:string) => void;
    userLoggedIn: boolean;
    setUserLoggedIn:(status: boolean) => void;
}
 
export const UsuarioLogadoContext = createContext<ContextType | null>(null);
 
export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {
 
    const[name, setName] = useState('');
    const[userLoggedIn, setUserLoggedIn] = useState(false);
    
    return (
        <UsuarioLogadoContext.Provider value ={{name, userLoggedIn, setName, setUserLoggedIn}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}
