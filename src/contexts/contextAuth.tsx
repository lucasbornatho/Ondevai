import { ReactNode, createContext, useEffect, useState } from "react";
 
type ContextType = {
    name: string;
    setName: (n:string) => void;
}
 
export const UsuarioLogadoContext = createContext<ContextType | null>(null);
 
export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {
 
    const[name, setName] = useState('');
    
    return (
        <UsuarioLogadoContext.Provider value ={{name, setName}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}
