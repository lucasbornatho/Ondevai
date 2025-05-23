import { ReactNode, createContext, useEffect, useState } from "react";

type ContextType = {
    name: string;
    setName: (n: string) => void;
    id: string;
    setID: (n: string) => void;
};

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState(() => {
        return localStorage.getItem("name") || "";
    });

    const [id, setID] = useState(() => {
        return localStorage.getItem("id") || "";
    });

    useEffect(() => {
        if (name) {
            localStorage.setItem("name", name);
        } else {
            localStorage.removeItem("name");
        }
    }, [name]);

    useEffect(() => {
        if (id) {
            localStorage.setItem("id", id);
        } else {
            localStorage.removeItem("id");
        }
    }, [id]);

    return (
        <UsuarioLogadoContext.Provider value={{ name, id, setName, setID }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};